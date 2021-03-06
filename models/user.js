const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => { 
 const User = sequelize.define('user', {

    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
           // is: ["^[a-z]+$",'i'], 
            len: [4, 20],
            notNull: {
                msg: 'Please enter your Email'
              }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const salt = bcrypt.genSaltSync(12);
            const hash = bcrypt.hashSync(value, salt);
            this.setDataValue('password', hash)
        },
        validate: {
           // is: ["^[a-z]+$",'i'], 
           // len: [4, 20],
            notNull: {
                msg: 'Please enter your Password'
              }
        }
    },
    vote: {
        type: DataTypes.INTEGER,
        defaultValue: 1
       }
       
       
})
User.prototype.validPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}
return User

}
