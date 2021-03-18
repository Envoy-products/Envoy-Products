const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductRet extends Model {
}

//define table columns and configuration
ProductRet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        retailer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'retailer',
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'product',
                key: 'id'
            }
        }     
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_ret'
    }
)

module.exports = ProductRet;