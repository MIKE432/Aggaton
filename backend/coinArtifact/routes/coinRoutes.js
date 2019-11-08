const 
    coinController = require('../controllers/coinController'),
    coinAcl = require('../accessList').acl,
    checkAuthorization = require('../../core/authorizationChecker').isAllowed(coinAcl);

    
module.exports = function (app) {

    app.route('/api/coin/new').all(checkAuthorization).post(coinController.saveCoin);
    app.route('/api/coin/formdata').get(coinController.getDataToForm);
    app.route('/api/coin/:id').get(coinController.getCoin);
    app.route('/api/coin').get(coinController.getCoins);
    app.route('/api/expertcoins').get(coinController.getExpertCoins);
    app.route('/api/coin/:id/averse').post(coinController.saveAverse);
    app.route('/api/coin/:id/reverse').post(coinController.saveReverse);
}