
const Category = require('./Category');
const Comment = require('./Comment');
const Country = require('./Country');
const Post = require('./Post');
const Product = require('./Product');
const ProductRet = require('./ProductRet');
const Rating = require('./Rating');
const Region = require('./Region');
const RegionRet = require('./RegionRet');
const Retailer = require('./Retailer');
const Review = require('./Review');
const User = require('./User');


// Associations between User and Region
// a region can have many users, but a user belongs to one region only
Region.hasMany(User, {
    foreignKey: 'region_id'
});

User.belongsTo(Region, {
    foreignKey: 'region_id',
    onDelete: 'SET NULL'
});

// Associations between Region and Country 
// a country can have many regions, but a region belongs to one country only
Country.hasMany(Region, {
    foreignKey: 'country_id'
});

Region.belongsTo(Country, {
    foreignKey: 'country_id',
    onDelete: 'SET NULL'
});

// Associations between Region and Retailer (through RegionRet)
// a region can have many retailers, and a retailer can belong to many regions
Region.hasMany(RegionRet, {
    foreignKey: 'region_id'
});

RegionRet.belongsTo(Region, {
    foreignKey: 'region_id'
});

Retailer.hasMany(RegionRet, {
    foreignKey: 'retailer_id'
});

RegionRet.belongsTo(Retailer, {
    foreignKey: 'retailer_id'
});

Region.belongsToMany(Retailer, {
    through: RegionRet,
    as: 'retailers',
    foreignKey: 'region_id'
});

Retailer.belongsToMany(Region, {
    through: RegionRet,
    as: 'regions',
    foreignKey: 'retailer_id'
});

// Associations between Post and Comment
// a post can have many comments, but a comment belongs to one post only
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// Associations between User and Comment
// a user can have many comments, but a comment belongs to one user only
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Associations between User and Post
// a user can have many posts, but a post belongs to one user only
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Associations between Category and Product
// a category can have many products, but a product belongs to one category only
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

// Associations between Product and Retailer (through ProductRet)
// a retailer can have many products, and a product can belong to many retailers
Product.hasMany(ProductRet, {
    foreignKey: 'product_id'
});

ProductRet.belongsTo(Product, {
    foreignKey: 'product_id'
});

Retailer.hasMany(ProductRet, {
    foreignKey: 'retailer_id'
});

ProductRet.belongsTo(Retailer, {
    foreignKey: 'retailer_id'
});

Product.belongsToMany(Retailer, {
    through: ProductRet,
    as: 'retailers',
    foreignKey: 'product_id'
});

Retailer.belongsToMany(Product, {
    through: ProductRet,
    as: 'products',
    foreignKey: 'retailer_id'
});

// Associations between Product and Review
// a product can have many reviews, but a review belongs to one product only
Product.hasMany(Review, {
    foreignKey: 'product_id'
});

Review.belongsTo(Product, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});

// Associations between User and Review
// a user can have many reviews, but a review belongs to one user only
User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Associations between User and Product
// a user can have many products, but a product belongs to one user only
User.hasMany(Product, {
    foreignKey: 'user_id'
});

Product.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// Associations between Rating and Product
// a product can have many ratings, but a rating belongs to one product only
Product.hasMany(Rating, {
    foreignKey: 'product_id'
});

Rating.belongsTo(Product, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});

// Associations between Rating and User
// a user can have many ratings, but a rating belongs to one user only
User.hasMany(Rating, {
    foreignKey: 'user_id'
});

Rating.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Associations between Rating and Review
// a review can have one rating, and a rating belongs to one review
// Review.hasOne(Rating, {
//     foreignKey: 'rating_id'
// });

// Rating.belongsTo(Review, {
//     foreignKey: 'rating_id',
//     onDelete: 'SET NULL'
// });


module.exports = {
    Category,
    Comment,
    Country,
    Post,
    Product,
    ProductRet,
    Rating,
    Region,
    RegionRet,
    Retailer,
    Review,
    User
};