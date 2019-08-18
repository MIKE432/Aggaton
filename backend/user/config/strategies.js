const 
    LocalStrategy = require('passport-local').Strategy,
    db = require('../../core/config/sequalize')


module.exports = (passport) => {
    passport.use(new LocalStrategy((username, password, done) => {
        db.user
    }));
}