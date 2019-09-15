const 
    coinService = require('../service/coinService'),
    handleErrors = require('../../core/config/errors').handleErrors;
    
exports.getCoin = handleErrors(async (req, res) => {
    res.json(await coinService.getCoin(req.params.id));
});

exports.saveCoin = handleErrors(async (req, res) => {
    await coinService.saveCoin(req.body);
    res.sendStatus(200);
})

