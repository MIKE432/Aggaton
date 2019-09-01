const
    sequelizeDb = require('../../defaults/defaults').sequelizeDb,
    sequelizeConstructor = require('sequelize'),
    path = require('path'),
    paths = require('../initConfig');

const sequelize = new sequelizeConstructor(sequelizeDb.databaseName, sequelizeDb.username, sequelizeDb.password, sequelizeDb.options);
const db = {};

paths.models.map(modelPath => {
    const model = sequelize.import(path.resolve(modelPath));
    console.log(model);
    db[model.name] = model;
})

db.sequelize = sequelize;
db.sequelizeConstructor = sequelizeConstructor;

module.exports = db;


