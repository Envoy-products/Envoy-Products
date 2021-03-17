const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Retailer extends Model {
}

//define table columns and configuration
Retailer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ret_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ret_site: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true
            }   
        }
          
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'retailer'
    }
)

module.exports = Retailer;