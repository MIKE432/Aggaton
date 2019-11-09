const
    db = require('../../core/config/sequalize');

const mapCoinToResponseModel = (coinInfo) => {
    return {
        averse: coinInfo.averse,
        reverse: coinInfo.reverse,
        year: coinInfo.year,
        price: { expertPrice: coinInfo.coin_price.expert_price, 
            lastAuction: coinInfo.coin_price.last_auction, 
            expertId: coinInfo.coin_price.expert_id },
        estimated_amount: coinInfo.estimated_amount,
        weight: coinInfo.weight.replace('.', ','),
        diameter: coinInfo.diameter.replace('.', ','),
        rim: { isConcave: coinInfo.coin_rim.is_concave, name: coinInfo.coin_rim.name},
        alloy: { shortName: coinInfo.coin_alloy.short_name, fullName: coinInfo.coin_alloy.full_name},
        shape: { name: coinInfo.coin_shape.name},
        stamp: coinInfo.stamp,
        nominal: coinInfo.nominal,
        currency: coinInfo.currency,
        country: coinInfo.country,
        mint: coinInfo.mint,
        grading: coinInfo.grading,
        createdBy: coinInfo.created_by,
        coinDepth: coinInfo.coinDepth,
        about: coinInfo.about,
        name: coinInfo.name
    };
}

exports.getCoins = async () => {
    const coins =  await db.artifactCoin.findAll( { include: [{ model: db.coinRim, as: 'coin_rim' }, 
    { model: db.coinShape, as: 'coin_shape' }, { model: db.coinPrice, as: 'coin_price' }, { model: db.alloy, as: 'coin_alloy'},{ model: db.coinDepth, as: 'coinDepth'}]})
        .map(coin => mapCoinToResponseModel(coin));
    return coins;
}

exports.getExpertCoins = async (expertId) => {
    const coins =  await db.artifactCoin.findAll( { where: { created_by: expertId }, include: [{ model: db.coinRim, as: 'coin_rim' },
     { model: db.coinShape, as: 'coin_shape' }, 
     { model: db.coinPrice, as: 'coin_price' },
     { model: db.alloy, as: 'coin_alloy'},
     { model: db.coinDepth, as: 'coinDepth'}]})
        .map(coin => mapCoinToResponseModel(coin));
    return coins;
}

exports.getExpertCoinsCount = async (expertId) => {
    const coinsCount =  await db.artifactCoin.count({ where: { created_by: expertId }})
    return coinsCount;
}

exports.getCoin = async (id) => {
    const coin =  await db.artifactCoin.findByPk(id, { include: [{ model: db.coinRim, as: 'coin_rim' }, 
    { model: db.coinShape, as: 'coin_shape' }, 
    { model: db.coinPrice, as: 'coin_price' }, 
    { model: db.alloy, as: 'coin_alloy'}, 
    { model: db.coinDepth, as: 'coinDepth'}]})
    return mapCoinToResponseModel(coin);
}

exports.saveCoin = async (coinInfo, expertId) => {
    const price = await db.coinPrice.create({ expert_price: coinInfo.price, expert_id: expertId });

    return db.artifactCoin.create({
        year: coinInfo.year,
        price: price.dataValues.id,
        estimated_amount: coinInfo.estimatedAmount,
        weight: coinInfo.weight.replace(',', '.'),
        diameter: coinInfo.diameter.replace(',', '.'),
        rim: coinInfo.rim.replace(',', '.'),
        alloy: coinInfo.alloy,
        shape: coinInfo.shape,
        stamp: coinInfo.stamp,
        nominal: coinInfo.nominal,
        currency: coinInfo.currency,
        country: coinInfo.country,
        mint: coinInfo.mint,
        grading: coinInfo.grading,
        created_by: expertId,
        coin_depth: coinInfo.coinDepth,
        about: coinInfo.about,
        name: coinInfo.name
    })
}

exports.getDataToForm = async () => {
    const rims = await db.coinRim.findAll();
    const shapes = await db.coinShape.findAll();
    const alloys = await db.alloy.findAll();
    const coinDepths = await db.coinDepth.findAll();

    return { rims, shapes, alloys, coinDepths };
}

exports.saveReverse = async (reverse, id) => {
    db.artifactCoin.update({ reverse }, { where: { id }})
}

exports.saveAverse = async (averse, id) => {
    db.artifactCoin.update({ averse }, { where: { id }})
}