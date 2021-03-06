const router = require('express').Router();
const { Post, Product, User, Category, Retailer, ProductRet } = require('../models');
const sequelize = require('../config/connection');
const { auth } = require('../utils/auth');

// Get all featured posts and featured products for all users and render homepage handlebars
router.get('/', auth, async (req, res) => {
    try{
        let data = {};
        // find all posts belonging to logged in user
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
                        [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = post.user_id)"), 'full_name']
                    ]
                }
            ]
        });
        const posts = dbPostData.map(post => post.get({ plain: true })); // serialize data
        
        const posts_pending = posts.filter(post => post.post_status === 'pending');
        const posts_public = posts.filter(post => post.post_status !== 'pending');

        // Find all featured posts
        const dbFeaturedPostData = await Post.findAll({
            where: {
                post_status: "featured"
            },
            attributes: [
                'id', 
                'title'
            ],
            include: [
                {
                    model: User,
                    attributes: [
                        [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = post.user_id)"), 'full_name']
                    ]
                }
            ]
        }); 

        const featured_posts = dbFeaturedPostData.map(post => post.get({ plain: true })); // serialize data

        // Find all featured products
        const dbFeaturedProductData = await Product.findAll({
            where: {
                status: 'featured'
            },
            attributes: [
                'id', 
                'name', 
            ],
            include: [
                {
                    model: User,
                    attributes: [
                        [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = product.user_id)"), 'full_name']
                    ]
                }
            ]
        });
        const featured_products = dbFeaturedProductData.map(product => product.get({ plain: true })); // serialize data

        // Find all approved posts
        const dbApprovedPostData = await Post.findAll({
            where: {
                post_status: "approved"
            },
            attributes: [
                'id', 
                'title'
            ],
            include: [
                {
                    model: User,
                    attributes: [
                        [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = post.user_id)"), 'full_name']
                    ]
                }
            ]
        }); 

        const approved_posts = dbApprovedPostData.map(post => post.get({ plain: true })); // serialize data

        // Find all approved products
        const dbApprovedProductData = await Product.findAll({
            where: {
                status: 'approved'
            },
            attributes: [
                'id', 
                'name', 
            ],
            include: [
                {
                    model: User,
                    attributes: [
                        [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = product.user_id)"), 'full_name']
                    ]
                }
            ]
        });
        const approved_products = dbApprovedProductData.map(product => product.get({ plain: true })); // serialize data

        // Find logged in user information
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

        // find all products belonging to logged in user
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
            featured_posts,
            featured_products,
            approved_posts,
            approved_products,
            user
        }
        
        // for admins only: list of all pending posts and products 
        if (req.session.isAdmin) {
            const dbPendingPostData = await Post.findAll({
                where: {
                    post_status: "pending"
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
                    status: "pending"
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
