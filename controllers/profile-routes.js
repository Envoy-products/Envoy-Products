const router = require('express').Router();
const { User, Region, Country } = require('../models');
const sequelize = require('../config/connection');

// get all posts that are not in pending status
router.get('/', (req, res) => {
    User.findOne({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'email',
            'first_name',
            'last_name',
            'region_id'
        ],
    })
        .then(dbUserData => {
            const users = dbUserData.map(user => user.get({ plain: true }));
            res.render('edit-profile', {
                users,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;