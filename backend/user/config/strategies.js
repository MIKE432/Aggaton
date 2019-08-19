const 
    LocalStrategy = require('passport-local').Strategy,
    db = require('../../core/config/sequalize'),
    UnauthorizedError = require('../../core/config/errors').UnauthorizedError


module.exports = (passport) => {
    passport.use(new LocalStrategy((email, password, done) => {
        
        db.user.findOne({ email }, function(err, user) {
        
            if(err) { return done(err); }
           
            if(!user || !user.validPassword(password)) {
                return done(new UnauthorizedError('Invalid username or password'));
            }

            return done(null, user);
        })
    }));
}