const router = require('express').Router();
const apiRoutes = require('./api');
const homePageRoutes = require('./homepage-routes');

router.use('/', homePageRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;