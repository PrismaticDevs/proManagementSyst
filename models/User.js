const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config");

class User extends Model {}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },
    },
    projectId: {
        type: DataTypes.UUID,
        references: {
            model: "project",
            key: "id"
        }
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "user",
});

module.exports = User;