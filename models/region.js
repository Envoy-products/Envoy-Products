const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Region extends Model {
}

//define table columns and configuration
Region.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        region_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'country',
                key: 'id'
            }
        }     
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'region'
    }
);

module.exports = Region;