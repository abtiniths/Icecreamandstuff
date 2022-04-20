const {Flavours, Users} = require('../models')
const bcrypt = require('bcrypt')







/*

const handleLogin = (username, password) => {
    return new Promise(async (resolve, reject) => {
        //check if username exist or not
        let user = await Users.findById(req.body.user_id);
        if (user) {
            //compare password
            await bcrypt.compare(req.body.password, user.password).then((isMatch) => {
                if (isMatch) {
                    resolve(true);
                } else {
                    reject(`The password is incorrect`);
                }
            });
        } else {
            reject(`This username "${user.username}" doesn't exist`);
        }
    });
};

const stuff = async (req, res) => {
    try {
        await handleLogin(req.body.username, req.body.password);
        return res.redirect("/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/login");
    }
}
*/


module.exports = {
    
    //handleLogin
}