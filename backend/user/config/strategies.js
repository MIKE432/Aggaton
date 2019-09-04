const 
    LocalStrategy = require('passport-local').Strategy,
    Crypto = require('crypto-js'),
    db = require('../../core/config/sequalize'),
    UnauthorizedError = require('../../core/config/errors').UnauthorizedError,
    userService = require('../services/userService');
    
module.exports =  (passport) => {

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
      },
        async (email, password, done) => {


        const user = await userService.getUser(email, true);

        const passwordAndSalt = password + user.salt;
        const hashedPassword = Crypto.SHA256(passwordAndSalt).toString();

        if(!user || !(hashedPassword === user.password )) {
            return done(new UnauthorizedError('Invalid username or password'));
        }

        return done(null, userService.mapUserToResponseModel(user));

    }));
}