const
    db = require('../../core/config/sequalize');

const mapCoinToResponseModel = (coin) => {
    coin['price'] = coin.coin_price;
    coin['rim'] = coin.coin_rim;
    coin['shape'] = coin.coin_shape;

    return coin;
}

exports.getCoins = async () => {
    const coins =  await db.artifactCoin.findAll( { include: [{ model: db.coinRim, as: 'coin_rim' }, { model: db.coinShape, as: 'coin_shape' }, { model: db.coinPrice, as: 'coin_price' }]})
        .map(coin => mapCoinToResponseModel(coin));
    return coins;
}

exports.getExpertCoins = async (expertId) => {
    const coins =  await db.artifactCoin.findAll( { where: { created_by: expertId }, include: [{ model: db.coinRim, as: 'coin_rim' }, { model: db.coinShape, as: 'coin_shape' }, { model: db.coinPrice, as: 'coin_price' }]})
        .map(coin => mapCoinToResponseModel(coin));
    return coins;
}

exports.getCoin = async (id) => {
    const coin =  await db.artifactCoin.findByPk(id, { include: [{ model: db.coinRim, as: 'coin_rim' }, { model: db.coinShape, as: 'coin_shape' }, { model: db.coinPrice, as: 'coin_price' }]})
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
        created_by: expertId
    })
}

exports.getDataToForm = async () => {
    const rims = await db.coinRim.findAll();
    const shapes = await db.coinShape.findAll();

    return { rims, shapes };
}