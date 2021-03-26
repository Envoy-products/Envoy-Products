const router = require('express').Router();
const { Country } = require('../../models');
const { auth } = require('../../utils/auth');

// get all countries
router.get('/', (req, res)=> {
    Country.findAll()
    .then(dbCountryData => res.json(dbCountryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// create a new country item
router.post('/', auth, (req, res) => {
    Country.create({
        country_name: req.body.country_name
    })
    .then(dbCountryData => {
        res.json(dbCountryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// update an item
router.put('/:id', auth, (req, res) => {
    Country.update(req.body, { 
        where: {
            id: req.params.id
        }
    })
    .then(dbCountryData => {
        if(!dbCountryData[0]) {
            res.status(404).json({ message: 'No country found with this id.'})
            return;
        }
        res.json(dbCountryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// delete an item
router.delete('/:id', auth, (req, res) => {
    Country.destroy ({
        where: {
            id: req.params.id
        }
    })
    .then(dbCountryData => {
        if(!dbCountryData) {
            res.status(404).json({ message: 'No country found with this id.'})
            return;
        }
        res.json(dbCountryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;