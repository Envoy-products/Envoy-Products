const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Review Model
class Review extends Model {}

// Fields/columns and configuration
Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.TEXT,
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
        },
        rating_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'rating',
                key: 'id'
            }
        } 
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
)

module.exports = Review;