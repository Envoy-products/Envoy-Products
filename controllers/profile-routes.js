const router = require('express').Router();
const { User, Region, Country } = require('../models');
const { auth } = require('../utils/auth');
const sequelize = require('../config/connection');
const { Op } = require('sequelize');

// get all posts that are not in pending status
router.get('/', auth, async (req, res) => {
    try {
        let data = {};

        const dbUserData = await User.findOne({
            where: {
                id: req.session.user_id
            },
            attributes: [
                'id',
                'email',
                'first_name',
                'last_name',
                'region_id',
                'avatar'
            ]
        });

        const user_data = dbUserData.get({ plain: true });

        console.log(user_data);

        data = {
            user_data
        }

        res.render('edit-profile', { 
            ...data,
            loggedIn: req.session.loggedIn,
            user_id: req.session.user_id,
        });

    } catch(err) { 
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;