const 
    coinController = require('../controllers/coinController'),
    coinAcl = require('../accessList').acl,
    checkAuthorization = require('../../core/authorizationChecker').isAllowed(coinAcl);

    
module.exports = function (app) {

    app.route('/api/coin/new').all(checkAuthorization).post(coinController.saveCoin);
    app.route('/api/coin/formdata').all(checkAuthorization).get(coinController.getDataToForm);
    app.route('/api/coin/:id').all(checkAuthorization).get(coinController.getCoin);
    app.route('/api/coin').all(checkAuthorization).get(coinController.getCoins);
    app.route('/api/expertcoins').all(checkAuthorization).get(coinController.getExpertCoins);
    app.route('/api/coin/:id/averse').all(checkAuthorization).post(coinController.saveAverse);
    app.route('/api/coin/:id/reverse').all(checkAuthorization).post(coinController.saveReverse);
}