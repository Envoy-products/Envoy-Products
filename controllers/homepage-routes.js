const router = require('express').Router();
const { Post, Product, User, Category, Comment, Region, Country } = require('../models');
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

// about page
router.get('/about', (req, res) => {
    res.render('about', { loggedIn: req.session.loggedIn });
});

// login request
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

// signup request
router.get('/signup', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    try{
        const dbRegionData = await Region.findAll({
            attributes: ['id', 'region_name'],
            include: [
                {
                    model: Country,
                    attributes: [
                        'country_name'
                    ]
                }
            ]
        });
        const regions = dbRegionData.map(region => region.get({ plain: true })); // serialize data
        res.render('signup', { regions });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// get all posts
router.get('/blogs', (req, res) => {
    Post.findAll({
        where: sequelize.literal('post_status != "pending"'),
        attributes: [
            'id',
            'title',
            'post_content',
            'post_url',
            'user_id',
            'created_at'
        ],
        include: [
            // {
            //   model: Comment,
            //   attributes: ['id', 'comment_text', 'post_id', 'user_id','created_at'],
            //   include: {
            //     model: User,
            //     attributes: ['username']
            //   }
            // },
            {
            model: User,
            attributes: ['first_name', 'last_name']
            }
        ]
    })
    .then(dbPostData => {
        console.log(dbPostData);
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('blog-list', { 
          posts,
          loggedIn: req.session.loggedIn
        });
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  });

// Single post view
router.get('/blog/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'post_content',
        'post_url',
        'post_status',
        'user_id',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text','post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['first_name', 'last_name', 'avatar']
          }
        },
        {
          model: User,
          attributes: ['first_name', 'last_name', 'avatar']
        }
      ]
    })
    .then(dbPostData => {
      console.log(dbPostData);
      if(!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
  
      //serialize the data
      const post = dbPostData.get({ plain: true });
  
      // pass data to template
      res.render('single-post', { 
        post,
        //loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });


module.exports = router;
