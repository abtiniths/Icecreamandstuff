const  Sequelize  = require('sequelize');
//const dbConfig = require('../config/db-config');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'dbdb'
  });

const User = require('./user') 
const Flavour = require('./flavour') 
 
const Flavours = Flavour(sequelize,Sequelize.DataTypes);
const Users = User(sequelize, Sequelize.DataTypes);


Flavours.hasMany(Users, { foreginKey: "flavourId" });
Users.belongsTo(Flavours, { foreginKey: "flavourId" });


/*
const db = {};
db.sequelize = sequelize;
db.models = {}
db.models.User = require('./user')(sequelize, Sequelize.DataTypes);
db.models.Flavour = require('./flavour')(sequelize, Sequelize.DataTypes);
*/




module.exports = {
Flavours,
Users
}