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
    email: 'shamim@me.com',
    password: '12345678',
    first_name: 'shamim',
    last_name: 'Imtiaz',
    region_id: 2,
    avatar: "/images/user-default.png",
    admin: true
  },
  {
    email: 'nathan@cbc.ca',
    password: 'password123',
    first_name: 'Nathan',
    last_name: 'Chow',
    region_id: 2,
    avatar: "/images/user-default.png",
    admin: true
  },
  {
    email: 'benn@gmail.com',
    password: 'password123',
    first_name: 'Benn',
    last_name: 'Asabir',
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
    email: 'samiul@cbc.ca',
    password: 'password123',
    first_name: 'Samiul Haider',
    last_name: 'Choudhury',
    region_id: 10,
    avatar: "/images/user-default.png",
    admin: false
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
