const
    db = require('../../core/config/sequalize');

exports.getCoin = (id) => {
    return db.artifactCoin.findByPk(id, { include: [{ model: db.rim }]})
}