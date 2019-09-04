const
    userStrategy = require('./strategies');


module.exports = userPassportConfiguration = (app, passport) => {

  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  userStrategy(passport);

  app.use(passport.initialize());
  app.use(passport.session());
}