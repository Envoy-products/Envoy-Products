const { Region } = require('../models');

const regionData = [
    {
      region_name: "All Canada",
      country_id: 2
    },
    {
      region_name: "Alberta",
      country_id: 2
    },
    {
      region_name: "British Columbia",
      country_id: 2
    },
    {
      region_name: "Manitoba",
      country_id: 2
    },
    {
      region_name: "New Brunswick",
      country_id: 2
    },
    {
      region_name: "Newfoundland and Labrador",
      country_id: 2
    },
    {
      region_name: "Northwest Territories",
      country_id: 2
    },
    {
      region_name: "Nova Scotia",
      country_id: 2
    },
    {
      region_name: "Nunavut",
      country_id: 2
    },
    {
      region_name: "Ontario",
      country_id: 2
    },
    {
      region_name: "Prince Edward Island",
      country_id: 2
    },
    {
      region_name: "Quebec",
      country_id: 2
    },
    {
      region_name: "Saskatchewan",
      country_id: 2
    },
    {
      region_name: "Yukon",
      country_id: 2
    },
    {
      region_name: "All United States",
      country_id: 3
    },
    {
      region_name: "Alabama",
      country_id: 3
    },
    {
      region_name: "Alaska",
      country_id: 3
    },
    {
      region_name: "American Samoa",
      country_id: 3
    },
    {
      region_name: "Arizona",
      country_id: 3
    },
    {
      region_name: "Arkansas",
      country_id: 3
    },
    {
      region_name: "California",
      country_id: 3
    },
    {
      region_name: "Colorado",
      country_id: 3
    },
    {
      region_name: "Connecticut",
      country_id: 3
    },
    {
      region_name: "Delaware",
      country_id: 3
    },
    {
      region_name: "Florida",
      country_id: 3
    },
    {
      region_name: "Georgia",
      country_id: 3
    },
    {
      region_name: "Guam",
      country_id: 3
    },
    {
      region_name: "Hawaii",
      country_id: 3
    },
    {
      region_name: "Idaho",
      country_id: 3
    },
    {
      region_name: "Illinois",
      country_id: 3
    },
    {
      region_name: "Indiana",
      country_id: 3
    },
    {
      region_name: "Iowa",
      country_id: 3
    },
    {
      region_name: "Kansas",
      country_id: 3
    },
    {
      region_name: "Kentucky",
      country_id: 3
    },
    {
      region_name: "Louisiana",
      country_id: 3
    },
    {
      region_name: "Maine",
      country_id: 3
    },
    {
      region_name: "Maryland",
      country_id: 3
    },
    {
      region_name: "Massachusetts",
      country_id: 3
    },
    {
      region_name: "Michigan",
      country_id: 3
    },
    {
      region_name: "Minnesota",
      country_id: 3
    },
    {
      region_name: "Mississippi",
      country_id: 3
    },
    {
      region_name: "Missouri",
      country_id: 3
    },
    {
      region_name: "Montana",
      country_id: 3
    },
    {
      region_name: "Nebraska",
      country_id: 3
    },
    {
      region_name: "Nevada",
      country_id: 3
    },
    {
      region_name: "New Hampshire",
      country_id: 3
    },
    {
      region_name: "New Jersey",
      country_id: 3
    },
    {
      region_name: "New Mexico",
      country_id: 3
    },
    {
      region_name: "New York",
      country_id: 3
    },
    {
      region_name: "North Carolina",
      country_id: 3
    },
    {
      region_name: "North Dakota",
      country_id: 3
    },
    {
      region_name: "Northern Mariana Islands",
      country_id: 3
    },
    {
      region_name: "Ohio",
      country_id: 3
    },
    {
      region_name: "Oklahoma",
      country_id: 3
    },
    {
      region_name: "Oregon",
      country_id: 3
    },
    {
      region_name: "Pennsylvania",
      country_id: 3
    },
    {
      region_name: "Puerto Rico",
      country_id: 3
    },
    {
      region_name: "Rhode Island",
      country_id: 3
    },
    {
      region_name: "South Carolina",
      country_id: 3
    },
    {
      region_name: "South Dakota",
      country_id: 3
    },
    {
      region_name: "Tennessee",
      country_id: 3
    },
    {
      region_name: "Texas",
      country_id: 3
    },
    {
      region_name: "U.S. Virgin Islands",
      country_id: 3
    },
    {
      region_name: "Utah",
      country_id: 3
    },
    {
      region_name: "Vermont",
      country_id: 3
    },
    {
      region_name: "Virginia",
      country_id: 3
    },
    {
      region_name: "Washington",
      country_id: 3
    },
    {
      region_name: "West Virginia",
      country_id: 3
    },
    {
      region_name: "Wisconsin",
      country_id: 3
    },
    {
      region_name: "Wyoming",
      country_id: 3
    }
  ];

const seedRegions = () => Region.bulkCreate(regionData);

module.exports = seedRegions;