const
    userService = require('../services/userService'),
    passport = require('passport');
exports.saveUser = async (req, res) => {
    try {
        await userService.saveUser(req.body);
        res.sendStatus(200);
    } catch(err) {
        return res.sendStatus(400);
    }
}

exports.login = (req, res, next) => {

    passport.authenticate('local', { session: true }, (err, user) => {
        if(err) {
            next(err)
        } else {

            delete user.password;
            delete user.salt;
            req.login(user, (err) => {
                if(err) {
                    next(err)
                } else {
                    res.json(user)
                }
            })
        }
    })(req, res, next);
}