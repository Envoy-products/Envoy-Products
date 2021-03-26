const router = require('express').Router();
const { Category, Product } = require('../../models');
const { auth } = require('../../utils/auth');

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
      attributes: ['id', 'category_name'],
      include: [
          {
              model: Product,
              attributes: ['id', 'name', 'description', 'website', 'product_img', 'status', 'user_id', 'category_id' ]
          }
      ]
  })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value

  Category.findOne({
      where: {
          id: req.params.id
      },
      attributes: ['id', 'category_name'],
      include: [
          {
              model: Product,
              attributes: ['id', 'name', 'description', 'website', 'product_img', 'status', 'user_id', 'category_id' ]
          }
      ]
  })
      .then(dbCategoryData => {
          if (!dbCategoryData) {
              res.status(404).json({ message: 'No category found with this id' });
              return;
          }
          res.json(dbCategoryData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.post('/', auth, (req, res) => {
  // create a new category
  Category.create({
      category_name: req.body.category_name
  })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.put('/:id', auth, (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
      where: {
          id: req.params.id
      }
  })
      .then(dbCategoryData => {
          if (!dbCategoryData[0]) {
              res.status(404).json({ message: 'No Category found with this id' });
              return;
          }
          res.json(dbCategoryData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.delete('/:id', auth, (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCategoryData => {
            if (!dbCategoryData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbCategoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
