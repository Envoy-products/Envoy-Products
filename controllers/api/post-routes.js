const router = require('express').Router();
const { Post, User } = require('../../models');
const sequelize = require('../../config/connection');

// Get all posts
router.get('/', (req, res) => {
  // find all posts
  Post.findAll({
      attributes: ['id', 'title', 'post_content', 'post_url', 'post_status'],
      include: [
          {
              model: User,
              attributes: [
                  'id',
                  'avatar',
                  [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = post.user_id)"), 'author'] 
                ]
          }
      ]
  })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// Get single post 
router.get('/:id', (req, res) => {
  // find one post by its `id` value
  Post.findOne({
      where: {
          id: req.params.id
      },
      attributes: ['id', 'title', 'post_content', 'post_url', 'post_status'],
      include: [
        {
            model: User,
            attributes: ['id', 'email', 'first_name', 'last_name', 'avatar' ]
        }
        ]
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

// Create a new post
router.post('/', (req, res) => {
  // create a new post
  Post.create({
    title: req.body.title,
    post_content: req.body.post_content,
    post_url: req.body.post_url,
    user_id: req.body.user_id,  // [TO DO: replace this with session parameter]
    post_status: req.body.post_status
  })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// Update a post
router.put('/:id', (req, res) => {
  // update a post by its `id`
  Post.update(req.body, {
      where: {
          id: req.params.id
      }
  })
      .then(dbPostData => {
          if (!dbPostData[0]) {
              res.status(404).json({ message: 'No Post found with this id' });
              return;
          }
          res.json(dbPostData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// Delete a post
router.delete('/:id', (req, res) => {
    // delete a post by its `id`
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
