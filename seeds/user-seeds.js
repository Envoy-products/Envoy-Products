const { User } = require('../models');

const userdata = [
  {
    email: 'rsmith@cbc.ca',
    password: 'password123',
    first_name: 'Richard',
    last_name: 'Smith',
    region_id: 2,
    avatar: "",
    admin: true
  },
  {
    email: 'mkunz@gmail.com',
    password: 'password123',
    first_name: 'Mac',
    last_name: 'Kunz',
    region_id: 2,
    avatar: "",
    admin: false
  },
  {
    email: 'jsmith@gmail.com',
    password: 'password123',
    first_name: 'Joe',
    last_name: 'Smith',
    region_id: 10,
    avatar: "",
    admin: false
  },
  {
    email: 'mslater@cbc.ca',
    password: 'password123',
    first_name: 'Michael',
    last_name: 'Slater',
    region_id: 10,
    avatar: "",
    admin: false
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
