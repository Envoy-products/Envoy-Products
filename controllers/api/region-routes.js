const router = require('express').Router();
const { Region, Country } = require('../../models');
const { auth } = require('../../utils/auth');

//GET /api/countries
router.get('/', (req, res)=> {
    Region.findAll(req.body, {
        include: [
            {
                model: Country,
                attributes: ['country_name']
            }
        ]
    })
    .then(dbRegionData => res.json(dbRegionData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//GET /api/region
router.get('/:id', (req, res)=> {
    Region.findOne(req.body, {
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Country,
                attributes: ["country_name"]
            }
        ]
    })
    .then(dbRegionData => res.json(dbRegionData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


router.post('/', auth, (req, res) => {
    Region.create({
       region_name: req.body.region_name,
       country_id: req.body.country_id
    })
    .then(dbRegionData => {
        res.json(dbRegionData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.put('/:id', auth, (req, res) => {
    Region.update(req.body, { 
        where: {
            id: req.params.id
        }
    })
    .then(dbRegionData => {
        if(!dbRegionData[0]) {
            res.status(404).json({ message: 'No country found with this id.'})
            return;
        }
        res.json(dbRegionData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.delete('/:id', auth, (req, res) => {
    Region.destroy ({
        where: {
            id: req.params.id,
        }
    })
    .then(dbRegionData => {
        if(!dbRegionData) {
            res.status(404).json({ message: 'No country found with this id.'})
            return;
        }
        res.json(dbRegionData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;