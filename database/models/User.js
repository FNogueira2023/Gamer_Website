

module.exports = (sequelize, dataTypes) => {

    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        email: {
            type: dataTypes.VARCHAR,
            allowNull: false,
            unique: true
        },
        pswd: {
            type: dataTypes.VARCHAR,
            allowNull: false
        },
        userName: {
            type: dataTypes.VARCHAR,
            allowNull: false
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);
    return User;

}