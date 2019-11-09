module.exports = (sequelize, DataTypes) => {
    return sequelize.define('artifactCoin', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        averse: { type: DataTypes.BLOB, allowNull: true },
        reverse: { type: DataTypes.BLOB, allowNull: true },
        name: { type: DataTypes.TEXT, allowNull: true },
        about: { type: DataTypes.TEXT, allowNull: true },
        year: { type: DataTypes.DATE, allowNull: true },
        estimated_amount: { type: DataTypes.INTEGER, allowNull: true },
        weight: { type: DataTypes.DECIMAL, allowNull: true },
        diameter: { type: DataTypes.DECIMAL, allowNull: true },
        alloy: { type: DataTypes.TEXT, allowNull: true },
        stamp: { type: DataTypes.TEXT, allowNull: true },
        nominal: { type: DataTypes.INTEGER, allowNull: true },
        currency: { type: DataTypes.TEXT, allowNull: true },
        country: { type: DataTypes.TEXT, allowNull: true },
        mint: { type: DataTypes.TEXT, allowNull: true },
        grading: { type: DataTypes.INTEGER, allowNull: true }
    }, {
        tableName: 'artifact_coin',
        createdAt: false,
        updatedAt: false
    });

}
// mint, country, currency, shape, need to be deleted it this file and be implemented in sequelize as associations