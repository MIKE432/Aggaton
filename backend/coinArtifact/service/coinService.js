const
    db = require('../../core/config/sequalize');

exports.getCoin = (id) => {
    return db.artifactCoin.findByPk(id, { include: [{ model: db.coinRim, as: 'coin_rim' }, { model: db.coinShape, as: 'coin_shape' }, { model: db.coinPrice, as: 'coin_price' }]})
}

exports.saveCoin = async (coinInfo, expertId) => {
    const price = await db.coinPrice.create({ expert_price: coinInfo.price, expert_id: expertId });
    return db.artifactCoin.create({
        year: coinInfo.year,
        price: price.dataValues.id,
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
        
    })
}

exports.getDataToForm = async () => {
    const rims = await db.coinRim.findAll();
    const shapes = await db.coinShape.findAll();

    return { rims, shapes };
}