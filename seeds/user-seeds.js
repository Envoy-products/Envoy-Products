const { User } = require('../models');

const userData = [
  {
    id: 1,  
    email: 'eric.n@me.com',
    password: 'home1y15',
    first_name: 'Eric',
    last_name: 'Normann',
    region_id: 10,
    avatar: "/images/eric.jpg",
    admin: true
  },
  {
    id: 2,  
    email: 'samiulhaydereee@gmail.com',
    password: 'password',
    first_name: 'Samiul',
    last_name: 'Choudhury',
    region_id: 2,
    avatar: "https://avatars.githubusercontent.com/u/3344833?s=460&u=46efd9bd90904237b452dbaefdb03a57156ef84b&v=4",
    admin: true
  },
  {
    id: 3,  
    email: 'emailme@nathanchow.ca',
    password: 'password',
    first_name: 'Nathan',
    last_name: 'Chow',
    region_id: 10,
    avatar: "https://ca.slack-edge.com/T01EXTZCZ44-U01FGC3DAN7-41377ad60b24-512",
    admin: true
  },
  {
    id: 4,  
    email: 'km_si@ymail.com',
    password: 'password',
    first_name: 'Shamim',
    last_name: 'Imtiaz',
    region_id: 10,
    avatar: "https://ca.slack-edge.com/T01EXTZCZ44-U01F9AY18T0-ad94549a1f86-512",
    admin: true
  },
  {
    id: 5,  
    email: 'benasabir@gmail.com',
    password: 'password',
    first_name: 'Benjamin',
    last_name: 'Asabir',
    region_id: 10,
    avatar: "https://ca.slack-edge.com/T01EXTZCZ44-U01FR9XTTN0-9995038c9f3b-512",
    admin: true
  },
  {
    id: 6,  
    email: 'rsmith@cbc.ca',
    password: 'password123',
    first_name: 'Rhonda',
    last_name: 'Smith',
    region_id: 2,
    avatar: "https://pbs.twimg.com/profile_images/1269155389/Rhona_McEwen_92_8x10-1.jpg",
    admin: false
  },
  {
    id: 7,  
    email: 'mkunz@gmail.com',
    password: 'password123',
    first_name: 'Mac',
    last_name: 'Kunz',
    region_id: 2,
    avatar: "/images/user-default.png",
    admin: false
  },
  {
    id: 8,  
    email: 'jsmith@gmail.com',
    password: 'password123',
    first_name: 'Joe',
    last_name: 'Smith',
    region_id: 10,
    avatar: "/images/user-default.png",
    admin: false
  },
  {
    id: 9,  
    email: 'mslater@cbc.ca',
    password: 'password123',
    first_name: 'Michelle',
    last_name: 'Slater',
    region_id: 15,
    avatar: "https://deptmed.queensu.ca/sites/deptmed/files/team/Gibson%2C%20Michelle%202019.jpg",
    admin: false
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
