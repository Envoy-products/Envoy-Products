const seedCategories = require('./category-seeds');
const seedCountries = require('./country-seeds');
const seedRegions = require('./region-seeds');
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedRetailers = require('./retailer-seeds');
const seedProducts = require('./product-seeds');
const seedComments = require('./comment-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('===================');
  await seedCategories();

  console.log('===================');
  await seedCountries();

  console.log('===================');
  await seedRegions();

  console.log('===================');
  await seedUsers();
  
  console.log('===================');
  await seedPosts();

  console.log('===================');
  await seedRetailers();

  console.log('===================');
  await seedProducts();

  console.log('===================');
  await seedComments();
  
  process.exit(0);
};

seedAll();