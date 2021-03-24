const router = require('express').Router();
const { Review, User, Product } = require('../../models');
const { auth } = require('../../utils/auth');
const sequelize = require('../../config/connection');

// Get all reviews
router.get('/', (req, res) => {
    Review.findAll({
        attributes: [
            'id', 
            'content'
        ],
        include: [
            {
                model: User,
                attributes: [
                    'id',
                    'avatar',
                    [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = review.user_id)"), 'full_name']
                ]
            },
            {
                model: Product,
                attributes: [
                    'id',
                    'name',
                    'status'
                ]
            }
        ]
    })
        .then(dbReviewData => res.json(dbReviewData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get a single review
router.get('/:id', (req, res) => {
    Review.findOne({
        attributes: [
            'id', 
            'content'
        ],
        include: [
            {
                model: User,
                attributes: [
                    'id',
                    'avatar',
                    [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = review.user_id)"), 'full_name']
                ]
            },
            {
                model: Product,
                attributes: [
                    'id',
                    'name',
                    'status'
                ]
            }
        ]
    })
        .then(dbReviewData => res.json(dbReviewData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Post a new review
router.post('/', auth, (req, res) => {
    // expected req.body: { content: "some review", product_id: 3 }
    Review.create({
      content: req.body.content,
      user_id: req.session.user_id,
      product_id: req.body.product_id
    })
      .then(dbReviewData => res.json(dbReviewData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
});

// Delete a comment
router.delete('/:id', auth, (req, res) => {
    Review.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbReviewData => {
          if (!dbReviewData) {
            res.status(404).json({ message: 'No review found with this id' });
            return;
          }
          res.json(dbReviewData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

module.exports = router;