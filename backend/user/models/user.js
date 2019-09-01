module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: { type: DataTypes.TEXT, allowNull: false },
        last_name: { type: DataTypes.INTEGER, allowNull: false },
        salt: { type: DataTypes.TEXT, allowNull: false },
        email: { type: DataTypes.TEXT, allowNull: false },
        password: { type: DataTypes.TEXT, allowNull: false },
        is_expert: { type: DataTypes.BOOLEAN, allowNull: false },
    }, {
        tableName: 'userd',
        createdAt: false,
        updatedAt: false
    });

}