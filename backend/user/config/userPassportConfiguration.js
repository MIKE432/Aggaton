const
    userStrategy = require('./strategies');


module.exports = userPassportConfiguration = (app, passport) => {

    userStrategy(passport);

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });

      app.use(passport.initialize());
      app.use(passport.session());
}