// path and model require
const path = require('path');
const { Users, Flavours } = require("./models");
let cookieParser = require('cookie-parser')

// express engine/confg
const express = require('express');
const app = express();



//const configSession = require('./config/session')
app.use(cookieParser('secret'))
const session = require('express-session')
app.use(session({
    key: 'user_sid',
    secret: 'stuff secret',
    saveUninitialized: false,
    resave: false,
    cookie: { 
        expires: 600000
    },
}))





// dotenv
require('dotenv').config();
let port = process.env.PORT
let host = process.env.HOST


//routes
const login = require('./routes/login');
const flavour = require('./routes/flavour');
const vote = require('./routes/vote');
const register = require('./routes/register');


// expres middleware && static files
app.use( express.json() );
app.use( express.urlencoded({ extended: true}))
app.use('/static', express.static(path.join(__dirname, 'public')));


let sessionChecker = (req, res) => {
    if(req.session.Users && req.cookies.user_sid){
        res.redirect('/')
    }
}

//config app session
//configSession(app)


// global async
;(async () => {
    await Users.sequelize.sync({alter:true});
    await Flavours.sequelize.sync({alter: true});
})();

// app use router paths
app.use('/', login);
app.use('/register', register);
app.use('/flavour', flavour);
app.use('/vote', vote);


app.use((req, res) => {
    if(req.cookies.user_sid && !req.session.Users){
        res.clearCookie('user_sid')
    }
    
});



app.set( 'view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));







app.listen(port, host, () => {
    console.log(`Server is listening ${host}:${port}`)
});