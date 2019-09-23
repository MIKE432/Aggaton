const 
    userController = require('../controllers/userController');

module.exports = function (app) {
    app.route('/api/signin').post(userController.saveUser);

    app.route('/api/login').post(userController.login);

    app.route('/api/logout').get(userController.logout);

    app.route('/api/user').get((req, res) => res.json(req.user));
}