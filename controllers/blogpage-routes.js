const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');

// get all posts that are not in pending status
router.get('/', (req, res) => {
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

//Load Add Article page
router.get('/add', (req, res) => {
    if(!req.session.loggedIn){
        res.redirect('/signup');
    }
    res.render('add-post', { 
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id
    });
});

// Single post view
router.get('/:id', (req, res) => {
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
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
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
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            //serialize the data
            const post = dbPostData.get({ plain: true });

            // pass data to template
            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;