const express = require('express');
const router = express.Router();
const  Flavours  = require('../../controllers/flavour')



router.get('/', Flavours.getAll)

router.post('/vote', Flavours.voteCounter)

module.exports = router;