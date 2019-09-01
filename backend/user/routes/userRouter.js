const 
    userController = require('../controllers/userController');

module.exports = function (app) {
    app.post('/signin', userController.saveUser)

}