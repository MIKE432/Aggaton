const 
    coinService = require('../service/coinService'),
    handleErrors = require('../../core/config/errors').handleErrors;
    
exports.getCoin = handleErrors(async (req, res) => {
    res.json(await coinService.getCoin(req.params.id));
});

exports.saveCoin = handleErrors(async (req, res) => {
    await coinService.saveCoin(req.body, req.user.id);
    res.sendStatus(200);
})

exports.getDataToForm = handleErrors(async (req, res) => {
    res.json(await coinService.getDataToForm());
})

exports.getCoins = handleErrors(async (req, res) => {
    res.json(await coinService.getCoins());
})