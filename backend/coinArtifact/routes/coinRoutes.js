const 
    coinController = require('../controllers/coinController');

module.exports = function (app) {

    app.route('/api/coin/new').post(coinController.saveCoin);
}