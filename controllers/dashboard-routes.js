const router = require('express').Router();
const { Post, Product, User, Category, Region, Country } = require('../models');
const sequelize = require('../config/connection');
const { auth } = require('../utils/auth');

// Get all featured posts and featured products for all users and render homepage handlebars
router.get('/', auth, async (req, res) => {
    try{
        // find all posts    
        const dbPostData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id', 
                'title', 
                'post_content', 
                'post_url',
                'post_status'
            ],
            include: [
                {
                    model: User,
                    attributes: [
                        'avatar',
                        [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = post.user_id)"), 'author']
                    ]
                }
            ]
        });
        const posts = dbPostData.map(post => post.get({ plain: true })); // serialize data
        
        const posts_pending = posts.filter(post => post.post_status === 'pending');
        const posts_public = posts.filter(post => post.post_status !== 'pending');

        // find all products 
        const dbProductData = await Product.findAll({
            where: {
                user_id: req.session.user_id
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
        const products = dbProductData.map(product => product.get({ plain: true })); // serialize data
        
        const products_pending = products.filter(product => product.status === 'pending');
        const products_public = products.filter(product => product.status !== 'pending');

        res.json({ 
            posts_pending,
            posts_public,
            products_pending,
            products_public,
            loggedIn: req.session.loggedIn,
            user_id: req.session.user_id
        });

        // res.render('dashboard', { 
        //     posts_pending,
        //     posts_public,
        //     products_pending,
        //     products_public,
        //     loggedIn: req.session.loggedIn,
        //     user_id: req.session.user_id
        // });
    } catch(err) { 
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
