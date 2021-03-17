const { Model, DataTypes, BOOLEAN } = require('sequelize');
const sequelize = require('../config/connection');

// create Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      post_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      post_status: {
        type: BOOLEAN,
        allowNull: false
        }
     },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
    

  );
  module.exports = Post;