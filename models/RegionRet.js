const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RegionRet extends Model {
}

//define table columns and configuration
RegionRet.init(
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
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'region',
                key: 'id'
            }
        }     
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'region_ret'
    }
)

module.exports = RegionRet;