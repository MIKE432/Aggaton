const 
    userController = require('../controllers/userController');

module.exports = function (app) {
    app.route('/signin').post(userController.saveUser)

    app.route('/login').post(userController.login)

    app.get('/user', function(req, res){
        if(req.session.passport) {
            res.send(req.session);    
        } else {
            res.send(401);
        }

        
      })
}