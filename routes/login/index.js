const express = require('express');
const router = express.Router();
const Users  = require('../../controllers/user')





router.get('/', (req, res) =>{
    res.render('login');
})

router.post('/login', Users.letmein);


module.exports = router;