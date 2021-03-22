const { Review } = require('../models');

const reviewData = [
    {
        "content": "I like Apple products, and this particular one is a gem!",
        "user_id": 2,
        "product_id": 1
    },
    {
        "content": "this product sucks!",
        "user_id": 4,
        "product_id": 1
    },
    {
        "content": "this is a great alternative of traditional one-time-use products!",
        "user_id": 4,
        "product_id": 10
    }
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;