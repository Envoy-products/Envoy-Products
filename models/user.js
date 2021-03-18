const { Model, DataTypes, BOOLEAN } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//create our User Model
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//define table columns and configuration
User.init(
    {
        // define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the password must be at least four characters long
                len: [8]
            }
        },
       first_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        region_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'region',
                key: 'id'
            }
        },
        avatar: {
            type: DataTypes.STRING     
        },  
        admin: {
            type: BOOLEAN,
            allowNull: false
        }      
    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10 );
                return newUserData
            },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData
            }
        },


        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User;