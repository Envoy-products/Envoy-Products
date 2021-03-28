const { Rating } = require('../models');

const ratingData = [
    {
        "rating_val": 2,
        "user_id": 2,
        "product_id": 2
    },
    {
        "rating_val": 5,
        "user_id": 4,
        "product_id": 2
    },
    {
        "rating_val": 3,
        "user_id": 4,
        "product_id": 10
    }
];

const seedRatings = () => Rating.bulkCreate(ratingData);

module.exports = seedRatings;