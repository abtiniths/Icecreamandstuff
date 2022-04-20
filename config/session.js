const session = require('express-session')

// initalize sequelize with session store
const sequelize = require("./db-config");
let SequelizeStore = require("connect-session-sequelize")(session.Store);


let sessionStore = new SequelizeStore({
    db: sequelize
})



let configSession = (app) => { 
app.use(
  session({
    key: "express.sid",
    secret: "secret",
    store: sessionStore,
    resave: true,
    saveUninitialized: false,
    cookie: {httpOnly: false, secure: false, maxAge: 30000} 

  })
);
}






module.exports = configSession