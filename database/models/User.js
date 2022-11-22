module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: dataTypes.STRING,
            defaultValue: "John Doe"
        },
        pswd: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING,
            defaultValue: "johnDoe@mail.com"
        }
    }
    let config = {
        tableName: "users",
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    return User;

};
