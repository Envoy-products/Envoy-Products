const router = require('express').Router();
const apiRoutes = require('./api');
const homePageRoutes = require('./homepage-routes');
const blogPageRoutes = require('./blogpage-routes');
const productPageRoutes = require('./productpage-routes');

router.use('/', homePageRoutes);
router.use('/articles', blogPageRoutes);
router.use('/products', productPageRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;