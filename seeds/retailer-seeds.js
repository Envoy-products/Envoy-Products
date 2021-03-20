const { Retailer } = require('../models');

const retailerData = [
    {
        ret_name: 'Amazon',
        ret_site: 'www.amazon.ca',
    },
    {
        ret_name: 'Apple',
        ret_site: 'www.apple.com',
    },
    {
        ret_name: 'Wayfair',
        ret_site: 'www.wayfair.ca',
    },
];

const seedRetailers = () => Retailer.bulkCreate(retailerData);

module.exports = seedRetailers;
