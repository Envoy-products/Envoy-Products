const { User } = require('../models');

const userData = [
  {
    email: 'eric.n@me.com',
    password: 'home1y15',
    first_name: 'Eric',
    last_name: 'Normann',
    region_id: 10,
    avatar: "/images/eric.jpg",
    admin: true
  },
  {
    email: 'rsmith@cbc.ca',
    password: 'password123',
    first_name: 'Richard',
    last_name: 'Smith',
    region_id: 2,
    avatar: "/images/user-default.png",
    admin: true
  },
  {
    email: 'mkunz@gmail.com',
    password: 'password123',
    first_name: 'Mac',
    last_name: 'Kunz',
    region_id: 2,
    avatar: "/images/user-default.png",
    admin: false
  },
  {
    email: 'jsmith@gmail.com',
    password: 'password123',
    first_name: 'Joe',
    last_name: 'Smith',
    region_id: 10,
    avatar: "/images/user-default.png",
    admin: false
  },
  {
    email: 'mslater@cbc.ca',
    password: 'password123',
    first_name: 'Michael',
    last_name: 'Slater',
    region_id: 10,
    avatar: "/images/user-default.png",
    admin: false
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
