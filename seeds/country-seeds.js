const { Country } = require('../models');

const countryData = [
    {
        country_name: 'All'
    },
    {
        country_name: 'Canada'
    },
    {
        country_name: 'United States'
    }
];

const seedCountries = () => Country.bulkCreate(countryData);

module.exports = seedCountries;
