const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Product } = require('../../models');
const { auth } = require('../../utils/auth');

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        order: [['created_at', 'DESC']],
        attributes: ['id', 'title', 'post_content', 'post_url', 'post_status', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['first_name', 'last_name']
                }
            },
            // {
            //     model: Product,
            //     attributes: ['id', 'name', 'description', 'website', 'product_img', 'status', 'user_id', 'category_id'],
            //     include: {
            //         model: User,
            //         attributes: ['first_name', 'last_name']
            //     }
            // },
            {
                model: User,
                attributes: [
                    'id',
                    'avatar',
                    [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = post.user_id)"), 'author']
                ]
            },
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get a single post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'post_content', 'post_url', 'post_status', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name', 'avatar']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['first_name', 'last_name']
                }
            },
            // {
            //     model: Product,
            //     attributes: ['id', 'name', 'description', 'website', 'product_img', 'status', 'user_id', 'category_id'],
            //     include: {
            //         model: User,
            //         attributes: ['first_name', 'last_name']
            //     }
            // },
         ]
    })
        .then(dbPostData => {
        console.log(dbPostData.user);
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a post

router.post('/', auth, (req, res) => {
    Post.create({
        title: req.body.title,
        post_content: req.body.post_content,
        post_url: req.body.post_url,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Update a post

router.put('/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Delete a post

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
