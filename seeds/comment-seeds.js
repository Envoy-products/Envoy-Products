const { Comment } = require('../models');

const commentData = [
    {
        "comment_text": "Nice! Got me a RAV 4 Prime and I love it.",
        "user_id": 5,
        "post_id": 1
    },
    {
        "comment_text": "Wish I just drove locally like you. I gotta save up for a full EV",
        "user_id": 2,
        "post_id": 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;