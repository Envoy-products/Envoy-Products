const User = require('./User');
const Country = require('./Country');
const Region = require('./Region');
const Retailer = require('./Retailer');
const ProductRet = require('./ProductRet');
const RegionRet = require('./RegionRet');

User.belongsTo(Region, {
    foreignKey: 'region_id'
});

Region.hasMany(User, {
    foreignKey: 'region_id'
});

Retailer.belongsTo(Region, {
    foreignKey: 'region_id'
});

Region.hasMany(Retailer, {
    foreignKey: 'region_id'
});

Region.belongsTo(Country, {
    foreignKey: 'country_id'
});

Country.hasMany(Region, {
    foreignKey: 'country_id'
});

Region.belongsToMany(Retailer, {
    through: RegionRet,
    as: 'retailers',
    foreignKey: 'region_id'
});

Retailer.belongsToMany(Region, {
    through: RegionRet,
    as: 'resgions',
    foreignKey: 'region_id'
});