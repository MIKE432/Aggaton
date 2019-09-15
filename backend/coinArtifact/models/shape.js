module.exports = (sequelize, DataTypes) => {
    return sequelize.define('coinShape', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: { type: DataTypes.TEXT, allowNull: false }
    }, {
        tableName: 'shape',
        createdAt: false,
        updatedAt: false
    });
}