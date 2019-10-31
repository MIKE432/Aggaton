module.exports = (sequelize, DataTypes) => {
    return sequelize.define('alloy', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        short_name: { type: DataTypes.TEXT, allowNull: false },
        full_name: { type: DataTypes.TEXT, allowNull: false }
    }, {
        tableName: 'alloy',
        createdAt: false,
        updatedAt: false
    });

}