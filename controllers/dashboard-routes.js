const router = require('express').Router();
const { Post, Product, User, Category, Retailer, Region, Country, ProductRet } = require('../models');
const sequelize = require('../config/connection');
const { auth } = require('../utils/auth');
const { Op } = require('sequelize');

// Get all featured posts and featured products for all users and render homepage handlebars
router.get('/', auth, async (req, res) => {
    try{
        let data = {};
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
<<<<<<< HEAD
                        [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = post.user_id)"), 'author']                    ]
=======
                        [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = post.user_id)"), 'full_name']
                    ]
>>>>>>> develop
                }
            ]
        });
        const posts = dbPostData.map(post => post.get({ plain: true })); // serialize data
        
        const posts_pending = posts.filter(post => post.post_status === 'pending');
        const posts_public = posts.filter(post => post.post_status !== 'pending');

        const dbUserData = await User.findOne({
            where: {
                id: req.session.user_id
            },
            attributes: [
                'id',
                'first_name',
                'last_name',
                'avatar',
                'email'
            ]
        })
        
        const user = dbUserData.get({ plain: true });


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
        data = {
            posts_pending,
            posts_public,
            products_pending,
            products_public,
            user
        }
        console.log(data.posts_pending);
        console.log(data.user_data)
        if (req.session.isAdmin) {
            const dbPendingPostData = await Post.findAll({
                where: {
                    post_status: "pending",
                    // user_id: {
                    //     [Op.ne]: req.session.user_id
                    // }
                },
                attributes: [
                    'id', 
                    'title'
                ],
                include: [
                    {
                        model: User,
                        attributes: [
                            'id',
                            [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = post.user_id)"), 'full_name']
                        ]
                    }
                ]
            });
            const pendingPosts = dbPendingPostData.map(post => post.get({ plain: true })); // serialize data

            const dbPendingProductData = await Product.findAll({
                where: {
                    status: "pending",
                    // user_id: {
                    //     [Op.ne]: req.session.user_id
                    // }
                },
                attributes: [
                    'id', 
                    'name'
                ],
                include: [
                    {
                        model: User,
                        attributes: [
                            'id',
                            [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = product.user_id)"), 'full_name']
                        ]
                    }
                ]
            });

            const pendingProducts = dbPendingProductData.map(product => product.get({ plain: true })); // serialize data
            data.all_pending_posts = pendingPosts;
            data.all_pending_products = pendingProducts;
        }   
        

        // res.json({ 
        //     ...data,
        //     loggedIn: req.session.loggedIn,
        //     user_id: req.session.user_id
        // });

        res.render('dashboard', { 
            ...data,
            loggedIn: req.session.loggedIn,
            user_id: req.session.user_id,
            isAdmin: req.session.isAdmin
        });
    } catch(err) { 
        console.log(err);
        res.status(500).json(err);
    }
});

// Edit an article
router.get('/articles/edit/:id', auth, async (req, res) => {
    try{
        // find the post    
        const dbPostData = await Post.findByPk(req.params.id, {
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
                        [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = post.user_id)"), 'full_name']
                    ]
                }
            ]
        });
        const post = dbPostData.get({ plain: true }); // serialize data

        res.render('edit-post', { 
            post,
            loggedIn: req.session.loggedIn,
            user_id: req.session.user_id,
            isAdmin: req.session.isAdmin
        });
    } catch(err) { 
        console.log(err);
        res.status(500).json(err);
    }
});


// Edit a product
router.get('/products/edit/:id', auth, async (req, res) => {
    try{
        // find the product    
        const dbProductData = await Product.findByPk(req.params.id, {
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
                        'id',
                        'category_name'
                    ]
                },
                {
                    model: Retailer,
                    through: ProductRet
                }
            ]
        });
        const product = dbProductData.get({ plain: true }); // serialize data
        
        const dbCategoryNameData = await Category.findAll({
            attributes: [
                'id', 
                'category_name'
            ]
        });
        const categories = dbCategoryNameData.map(category => category.get({ plain: true })); // serialize data
        
        const dbRetailerNameData = await Retailer.findAll({
            attributes: [
                'id', 
                'ret_name'
            ]
        });
        const retailers = dbRetailerNameData.map(retailer => retailer.get({ plain: true })); // serialize data

        // res.json({ 
        //     product,
        //     categories,
        //     retailers,
        //     loggedIn: req.session.loggedIn,
        //     user_id: req.session.user_id
        // });

        res.render('edit-product', { 
            product,
            categories,
            retailers,
            loggedIn: req.session.loggedIn,
            user_id: req.session.user_id,
            isAdmin: req.session.isAdmin
        });
    } catch(err) { 
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
