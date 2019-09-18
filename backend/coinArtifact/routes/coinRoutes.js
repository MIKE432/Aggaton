const 
    coinController = require('../controllers/coinController');

module.exports = function (app) {

    app.route('/api/coin/new').post(coinController.saveCoin);
    app.route('/api/coin/formdata').get(coinController.getDataToForm);
    app.route('/api/coin/:id').get(coinController.getCoin);
}