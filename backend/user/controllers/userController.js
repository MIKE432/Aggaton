const
    passport = require('passport'),
    userService = require('../services/userService'),
    handleErrors = require('../../core/config/errors').handleErrors

exports.saveUser = handleErrors(async (req, res, next) => {
        const user = await userService.saveUser(req.body);
        console.log(user);
        delete user.password;
        delete user.salt;
        req.login(user, (err) => {
            if(err) {
                next(err)
            } else {
                res.json(user);
            }
        }); 
})

exports.login = (req, res, next) => {

    passport.authenticate('local', { session: true }, (err, user) => {
        if(err) {
            next(err)
        } else {
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

exports.getCurrentUser = handleErrors(async (req, res) => {
    console.log(req.user);
    res.json(req.user)
})

exports.logout = handleErrors(async (req, res) => {
    req.logout();
    res.sendStatus(200);
})