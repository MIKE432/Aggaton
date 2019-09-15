const
    passport = require('passport'),
    userService = require('../services/userService'),
    handleErrors = require('../../core/config/errors').handleErrors

exports.saveUser = handleErrors(async (req, res) => {
        await userService.saveUser(req.body);
        res.sendStatus(200);
})

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