const router = require('express').Router();
const { Product, User, Category, Review, Rating } = require('../models');
const sequelize = require('../config/connection');


// get all products that are not in pending status
router.get('/', (req, res) => {
    Product.findAll({
        where: sequelize.literal('status != "pending"'),
        attributes: [
            'id', 
            'name', 
            'description', 
            'website', 
            'product_img',
            'status'
        ],
        include: [
            {
                model: User,
                attributes: [
                    'id',
                    'avatar',
                    [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = product.user_id)"), 'full_name']
                ]
            },
            {
                model: Category,
                attributes: [
                    'category_name'
                ]
            }
        ]
    })
        .then(dbProductData => {
            const products = dbProductData.map(product => product.get({ plain: true })); // serialize data
            
            res.render('products', {
                products,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Single product view
router.get('/:id', (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'name',
            'description',
            'website',
            'product_img',
            'status'
        ],
        include: [
            {
                model: User,
                attributes: [
                    'id',
                    'avatar',
                    [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = product.user_id)"), 'full_name']
                ]
            },
            {
                model: Category,
                attributes: [
                    'category_name'
                ]
            },
            {
                model: Review,
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
                            'first_name',
                            'last_name'
                        ]
                    },
                    {
                        model: Rating,
                        attributes: [
                            'id',
                            'rating'
                        ]
                    }
                ]
            }
        ]
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }

            //serialize the data
            const product = dbProductData.get({ plain: true });
            
            // pass data to template
            res.render('single-product', {
                product,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
