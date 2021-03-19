const { Region } = require('../models');

const regionData = [
  {
    region_name: 'canada-east-1',
    country_id: 1
  },
  {
    region_name: 'canada-west-1',
    country_id: 1
  },
  {
    region_name: 'canada-east-2',
    country_id: 1
  },
  {
    region_name: 'canada-west-2',
    country_id: 1
  },
  {
    region_name: 'us-east-1',
    country_id: 2
  },
  {
    region_name: 'us-west-1',
    country_id: 2
  },
  {
    region_name: 'us-east-2',
    country_id: 2
  },
  {
    region_name: 'us-west-2',
    country_id: 2
  }
];

const seedRegions = () => Region.bulkCreate(regionData);

module.exports = seedRegions;
