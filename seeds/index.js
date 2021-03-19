const seedCountries = require('./country-seeds');
const seedRegions = require('./region-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('===================');
  await seedCountries();

  console.log('===================');
  await seedRegions();

  console.log('===================');
  await seedUsers();
  
  process.exit(0);
};

seedAll();
