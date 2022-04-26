const express = require('express');
const router = express.Router();
const   Flavours   = require('../../controllers/flavour')



router.get('/', (req, res) =>{
    res.render('flavour');
})


router.post('/', Flavours.createFlavour)






module.exports = router;