const express = require('express');
const router = express.Router();
const  Flavours  = require('../../controllers/flavour')





router.get('/', Flavours.getAll)
router.post('/', Flavours.voteCounter)

router.get('/thanks', Flavours.top)

module.exports = router;