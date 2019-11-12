const
    passport = require('passport'),
    userService = require('../services/userService'),
    handleErrors = require('../../core/config/errors').handleErrors,
    coinService = require('../../coinArtifact/service/coinService')

exports.saveUser = handleErrors(async (req, res, next) => {
        const user = await userService.saveUser(req.body);
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
    const user = req.user;
    if(user)
        user.coinsCount = await coinService.getExpertCoinsCount(user.id);
    res.json(user)
})

exports.logout = handleErrors(async (req, res) => {
    req.logout();
    res.sendStatus(200);
})