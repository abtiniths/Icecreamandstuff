const { Users } = require('../models')
const bcrypt = require('bcrypt')

module.exports = {

    create: async (req, res) => {

        if (req.body.username && req.body.password) {

            const { username, password } = req.body;
            
            await Users.create({
                username,
                password
            })
            .then(user => {
               // req.session.user = user.dataValues;
                //console.log(req.session.user)
                res.redirect('/login')
            })
            
        }else {
            
                res.redirect('/register')
          
        }
    },



/*
    router.route('/')
    .get((req, res) => {
        res.render('register')
    })
      .post((req, res) => {
          Users.create({
              username: req.body.username,
              password: req.body.password
          })
           .then(user => {
               req.session.user = user.dataValues;
               res.redirect('/login')
           })
           .catch(error => {
               res.redirect('/register')
           })
      })


    login: async (req, res) => {
        const { username, password } = req.body;
        const user = await Users.findOne({
            where: {  username: username },
          });
        if (req.body.username && req.body.password) {
           if(req.configSession.authenticated){ 
            
            res.render('welcome', {username});
    }else {
        if(bcrypt.compareSync(password, user.password)){
            if(password === user.password) {
                req.configSession.authenticated = true
                res.configSession.user = {
                    username,password
                }
            }
        
        }
    } 
      }  
   },

 */



  handleLogin  : async (req, res) => {
   
        //check if username exist or not
       
        const user = await Users.findOne({
            where: {  username: req.body.username},
          });
          if(req.session.authenticated){ 
        if (user) {
            //compare password
            await bcrypt.compare(req.body.password, user.password).then((isMatch) => {
                if(isMatch){
                    res.redirect('/');
                } else {
                    console.error(`The password is incorrect`);
                }
            });
        } else {
            console.error(`The username is incorrect`);
        }
    }
},



loggan  : async (req, res) => {
const { username, password} = req.body;
const user = await Users.findOne({
    where: {  username: username},
  });
if( username && password) {
    req.session.authenticated
        res.redirect('/');
    
} else {
    await bcrypt.compare(req.body.password === user.password).then((isMatch) => {
        if(isMatch){
           req.session.authenticated = true;
           req.session.user = {
               username, password
           }
           req.session.user = user.dataValues;
           res.redirect('/')
        }else {
            res.status(403).json({msg: 'bad stuff'})
        }})
}
},


letmein: async (req, res) => {

       

        const  username = req.body.username;
        const  password = req.body.password;
        
        await Users.findOne({ where: {username: username} })
        .then(function (user)  {
            if(!user){
                res.redirect('/login')
            } else if(!user.validPassword(password)) {
                res.redirect('/login')
                console.log(req.session)
            }
            else {
                req.session.user = user.dataValues;
                console.log(req.session.user)
                res.redirect('/')
            }
           
        })   
    
},


}