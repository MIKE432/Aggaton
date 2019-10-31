module.exports = (sequelize, DataTypes) => {
    return sequelize.define('coinDepth', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: { type: DataTypes.TEXT, allowNull: false }
    }, {
        tableName: 'coin_depth',
        createdAt: false,
        updatedAt: false
    });
}