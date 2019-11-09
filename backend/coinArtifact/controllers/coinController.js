const 
    coinService = require('../service/coinService'),
    handleErrors = require('../../core/config/errors').handleErrors;
    
exports.getCoin = handleErrors(async (req, res) => {
    res.json(await coinService.getCoin(req.params.id));
});

exports.saveCoin = handleErrors(async (req, res) => {
    const id = (await coinService.saveCoin(req.body, req.user.id)).dataValues.id;
    res.send({ id });
})

exports.getDataToForm = handleErrors(async (req, res) => {
    res.json(await coinService.getDataToForm());
})

exports.getCoins = handleErrors(async (req, res) => {
    res.json(await coinService.getCoins());
})

exports.getExpertCoins = handleErrors(async (req, res) => {
    res.json(await coinService.getExpertCoins(req.user.id));
})

exports.saveAverse = handleErrors(async (req, res) => {
    const coin = await coinService.getCoin(req.params.id);
    if(coin.createdBy === req.user.id) {
        if(req.files) {
            await coinService.saveAverse(req.files.file.data, req.params.id);
            res.sendStatus(200);
        }
    } else {
        res.sendStatus(403);
    }
})


exports.saveReverse = handleErrors(async (req, res) => {
    const coin = await coinService.getCoin(req.params.id);
    if(coin.createdBy === req.user.id) {
        if(req.files) {
            await coinService.saveReverse(req.files.file.data, req.params.id);
            res.sendStatus(200);
        }

    } else {
        res.sendStatus(403);
    }
})