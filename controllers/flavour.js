
const {Flavours, Users} = require('../models')


const getAll = async (req, res) => {
    const flavours = await Flavours.findAll();
    res.render('index', { flavours });
}
  

const createFlavour = async (req, res) => {
        const  {flavour, description}  = new Flavours(req.body)
        await Flavours.create({
            flavour,
            description
        });
        res.redirect('/');
}



const voteCounter = async (req, res) => {

    const flavor = req.body.letsgo;
    const username = req.session.user
        //const voteCheck = await Users.findOne({ where: {user_id: username }, attributes: ['vote']})
        const voteCheck = await Users.findById({ where: {username: username}})
          if(voteCheck.vote === 0){
              res.redirect('/')
         }else {
        const flavourToUpdate = await Flavours.findOne({ where: { flavour: flavor } });
        flavourToUpdate.increment('vote');
    voteCheck.decrement('vote')
         }
    res.redirect('/');
}














/*
const VoteCounter = async (req, res) => {
       const what = req.body.votebutton
       const name = req.body.username
       // const voteCheck = await Users.findOne({ where: {username: name }, attributes: ['vote']})
      //  if(voteCheck.vote === 0){
       //     res.redirect('/')
       // }else {
        const incFlavourVote = await Flavours.findOne({ where: {flavour: req.body.what}})
        incFlavourVote.increment('vote')

        const vote = Flavours.findById(req.params.id)[0];
vote.increment('vote')

const incFlavourVote = await Flavours.findOne({ where: {flavour: flav}, attributes: ['vote']})
    incFlavourVote.increment('vote')

    const vote = Flavours.findById(req.params.id)[0];
    vote.increment('vote')
    
        const user = await Users.findOne({ where: {username: name }})
        user.decrement('vote')
   // }

res.redirect('/')
}
*/





module.exports = {
    getAll,
    createFlavour,
    voteCounter
}
