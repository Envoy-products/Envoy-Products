const router = require('express').Router();
const { Post, Product, User, Category } = require('../models');
const sequelize = require('../config/connection');


// Get all featured posts and featured products for all users and render homepage handlebars
router.get('/', (req, res) => {
    let data = {};
    // find all posts
    Post.findAll({
        where: {
            post_status: "featured"
        },
        attributes: ['id', 'title', 'post_content', 'post_url'],
        include: [
            {
                model: User,
                attributes: [
                    'avatar',
                    [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = post.user_id)"), 'author']
                ]
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true })); // serialize data
            data.featured_posts = posts;
            return Product.findAll({
                where: {
                    status: "featured"
                },
                attributes: ['id', 'name', 'description', 'website', 'product_img'],
                include: [
                    {
                        model: User,
                        attributes: [
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
            });
        })
        .then(dbProductData => {
            const products = dbProductData.map(product => product.get({ plain: true })); // serialize data
            data.featured_products = products;
            // res.json(data);
            res.render('homepage', {
                data,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;
