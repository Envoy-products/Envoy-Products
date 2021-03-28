const router = require('express').Router();
const { Rating } = require('../../models');
const { auth } = require('../../utils/auth');

router.get('/', (req, res) => {
  // find all ratings
  Rating.findAll({
      attributes: ['id', 'rating_val', 'user_id', 'product_id']
  })
      .then(dbRatingData => res.json(dbRatingData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
  // find one rating by its `id` value
  Rating.findOne({
      where: {
          id: req.params.id
      },
      attributes: ['id', 'rating_val', 'user_id', 'product_id']
  })
      .then(dbRatingData => {
          if (!dbRatingData) {
              res.status(404).json({ message: 'No rating found with this id' });
              return;
          }
          res.json(dbRatingData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.post('/', auth, (req, res) => {
  // create a new rating
  Rating.create({
      rating_val: req.body.rating_val,
      product_id: req.body.product_id,
      user_id: req.session.user_id
  })
      .then(dbRatingData => res.json(dbRatingData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.put('/:id', auth, (req, res) => {
  // update a rating by its `id` value
  Rating.update(req.body, {
      where: {
          id: req.params.id
      }
  })
      .then(dbRatingData => {
          if (!dbRatingData[0]) {
              res.status(404).json({ message: 'No rating found with this id' });
              return;
          }
          res.json(dbRatingData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.delete('/:id', auth, (req, res) => {
    // delete a rating by its `id` value
    Rating.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbRatingData => {
            if (!dbRatingData) {
                res.status(404).json({ message: 'No rating found with this id' });
                return;
            }
            res.json(dbRatingData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
