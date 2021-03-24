const router = require('express').Router();

const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes');
const countryRoutes = require('./country-routes');
const regionRoutes = require('./region-routes');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');
const productRoutes = require('./product-routes');
const reviewRoutes = require('./review-routes');


router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/countries', countryRoutes); 
router.use('/regions', regionRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/products', productRoutes);
router.use('/reviews', reviewRoutes);


module.exports = router;