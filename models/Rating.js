const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Rating Model
class Rating extends Model {}

// Fields/columns and configuration
Rating.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'rating'
    }
)

module.exports = Rating;