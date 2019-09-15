const
    db = require('../../core/config/sequalize');

exports.getCoin = (id) => {
    return db.artifactCoin.findByPk(id, { include: [{ model: db.rim }, { model: db.shape }]})
}

exports.saveCoin = (coinInfo) => {
    return db.artifactCoin.create({
        year: coinInfo.year,
        price: coinInfo.price,
        estimated_amount: coinInfo.estimatedAmount,
        weight: coinInfo.weight,
        diameter: coinInfo.diameter,
        rim: coinInfo.rim,
        alloy: coinInfo.alloy,
        shape: coinInfo.shape,
        stamp: coinInfo.stamp,
        nominal: coinInfo.nominal,
        currency: coinInfo.currency,
        country: coinInfo.country,
        mint: coinInfo.mint,
        grading: coinInfo.grading
    }, {
        include: [{ model: db.coinPrice }, { model: db.coinRim }, { model: db.coinShape }]
     })
}