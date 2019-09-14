module.exports = (sequelize, DataTypes) => {
    return sequelize.define('coinRim', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        is_concave: { type: DataTypes.BOOLEAN, allowNull: true },
        name: { type: DataTypes.TEXT, allowNull: false }
    }, {
        tableName: 'rim',
        createdAt: false,
        updatedAt: false
    });

}
// mint, country, currency, shape, need to be deleted it this file and be implemented in sequelize as associations