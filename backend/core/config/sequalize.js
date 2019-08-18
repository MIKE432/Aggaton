const
    sequelizeDb = require('../../defaults/defaults').sequelizeDb,
    Sequelize = require('sequelize'),
    path = require('path'),
    paths = require('./../findPaths');

const sequelize = new Sequelize(sequelizeDb.databaseName, sequelizeDb.username, sequelizeDb.password, sequelizeDb.options);
const db = {};

paths.models.map(modelPath => {
    const model = sequelize.import(path.resolve(modelPath));
    db[model] = model;
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


