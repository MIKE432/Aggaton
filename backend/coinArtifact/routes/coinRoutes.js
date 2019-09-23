const 
    coinController = require('../controllers/coinController'),
    coinAcl = require('../accessList').acl,
    checkAuthorization = require('../../core/authorizationChecker').isAllowed(coinAcl);

    
module.exports = function (app) {

    app.route('/api/coin/new').all(checkAuthorization).post(coinController.saveCoin);
    app.route('/api/coin/formdata').get(coinController.getDataToForm);
    app.route('/api/coin/:id').get(coinController.getCoin);
}