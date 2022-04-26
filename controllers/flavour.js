
const {Flavours, Users} = require('../models')
const { Op } = require("sequelize")

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
        res.redirect('/vote');
}


const top = async (req, res) => {
    const topp = await Flavours.findAll({
        where: {
            vote: {
                [Op.or]: {
                    [Op.gt]: 10,
                    [Op.eq]: null
                  }
            }
        },
     limit: 5
      });
      res.render('thanks', { topp });
}

const voteCounter = async (req, res) => {
    const flavor = req.body.letsgo;
    const username = req.session.user
        const voteCheck = await Users.findByPk(username.user_id)
          if(voteCheck.vote === 0){
            res.redirect('/')
           }else {
        const flavourToUpdate = await Flavours.findOne({ where: { flavour: flavor } });
        flavourToUpdate.increment('vote');
        voteCheck.decrement('vote')
        voteCheck.addflavourToUpdate(flavor)
        flavourToUpdate.flavour.id = voteCheck.user.flavourId 
        
         }
         res.redirect('/vote/thanks');
}


module.exports = {
    getAll,
    createFlavour,
    voteCounter,
    top
}
