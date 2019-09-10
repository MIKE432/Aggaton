const 
    userController = require('../controllers/userController');

module.exports = function (app) {
    app.route('/api/signin').post(userController.saveUser);

    app.route('/api/login').post(userController.login);
}