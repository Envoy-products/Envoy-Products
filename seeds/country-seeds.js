const { Country } = require('../models');

const countryData = [
  {
    country_name: 'Canada'
  },
  {
    country_name: 'USA'
  }
];

const seedCountries = () => Country.bulkCreate(countryData);

module.exports = seedCountries;
