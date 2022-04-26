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
                res.redirect('/')
            })
            
        }else {
            
                res.redirect('/register')
          
        }
    },


letmein: async (req, res) => {

        const  username = req.body.username;
        const  password = req.body.password;
        
        await Users.findOne({ where: {username: username} })
        .then(function (user)  {
            if(!user){
                res.redirect('/')
            } else if(!user.validPassword(password)) {
                res.redirect('/')
                console.log(req.session)
            }
            else {
                req.session.user = user.dataValues;
                console.log(req.session.user)
                res.redirect('/vote')
            }
           
        })   
    
},


}