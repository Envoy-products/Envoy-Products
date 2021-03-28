const router = require('express').Router();
const apiRoutes = require('./api');
const homePageRoutes = require('./homepage-routes');
const dashboardPageRoutes = require('./dashboard-routes');
const blogPageRoutes = require('./blogpage-routes');
const productPageRoutes = require('./productpage-routes');
const profileRoutes = require('./profile-routes');

router.use('/', homePageRoutes);
router.use('/dashboard', dashboardPageRoutes);
router.use('/articles', blogPageRoutes);
router.use('/products', productPageRoutes);
router.use('/profile', profileRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;