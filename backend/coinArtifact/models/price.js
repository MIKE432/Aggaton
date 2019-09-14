module.exports = (sequelize, DataTypes) => {
    return sequelize.define('coinPrice', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        last_auction: { type: DataTypes.INTEGER, allowNull: true },
        expert_price: { type: DataTypes.INTEGER, allowNull: true }
    }, {
        tableName: 'price',
        createdAt: false,
        updatedAt: false
    });

}
// mint, country, currency, shape, need to be deleted it this file and be implemented in sequelize as associations