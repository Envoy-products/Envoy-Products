const router = require('express').Router();


const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes');
const countryRoutes = require('./country-routes');
const regionRoutes = require('./region-routes');
//const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/countries', countryRoutes); 
router.use('/regions', regionRoutes);
//router.use('/comments', commentRoutes);



module.exports = router;
