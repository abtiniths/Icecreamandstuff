const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const  Users  = require('../../controllers/user')







router.get('/', (req, res) =>{
    res.render('register');
})


router.post('/', Users.create);

module.exports = router;