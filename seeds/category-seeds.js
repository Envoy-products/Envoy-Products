const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Stationary'
    },
    {
        category_name: 'Computers/Electronics'
    },
    {
        category_name: 'Vehicles'
    },
    {
        category_name: 'Laundry'
    },
    {
        category_name: 'Cleaning Products'
    },
    {
        category_name: 'Personal Hygiene'
    },
    {
        category_name: 'Apparel'
    },
    {
        category_name: 'Household'
    },
    {
        category_name: 'Kitchen'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;