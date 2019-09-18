const
    sequelizeDb = require('../../defaults/defaults').sequelizeDb,
    sequelizeConstructor = require('sequelize'),
    path = require('path'),
    paths = require('../initConfig');

const sequelize = new sequelizeConstructor(sequelizeDb.databaseName, sequelizeDb.username, sequelizeDb.password, sequelizeDb.options);
const db = {};

paths.models.map(modelPath => {
    const model = sequelize.import(path.resolve(modelPath));
    db[model.name] = model;
})

db.coinRim.hasMany(db.artifactCoin, { as: 'rim', foreignKey: 'rim' });
db.artifactCoin.belongsTo(db.coinRim, { as: 'coin_rim', foreignKey: 'rim' });

db.coinPrice.hasMany(db.artifactCoin, { as: 'price', foreignKey: 'price' });
db.artifactCoin.belongsTo(db.coinPrice, { as: 'coin_price', foreignKey: 'price' });

db.coinShape.hasMany(db.artifactCoin, { as: 'shape', foreignKey: 'shape' });
db.artifactCoin.belongsTo(db.coinShape, { as: 'coin_shape', foreignKey: 'shape' });

db.sequelize = sequelize;
db.sequelizeConstructor = sequelizeConstructor;

module.exports = db;


