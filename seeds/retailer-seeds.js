const { Retailer } = require('../models');

const retailerData = [
    {
        ret_name: 'Amazon',
        ret_site: 'www.amazon.ca',
    },
    {
        ret_name: 'Apple',
        ret_site: 'www.apple.com',
    },
    {
        ret_name: 'Wayfair',
        ret_site: 'www.wayfair.ca',
    },
    {
        ret_name: 'Hyundaicanada',
        ret_site: 'www.hyundaicanada.com'
    },
    {
        ret_name: "Mrs. Meyers",
        ret_site: 'www.mrsmeyers.com'
    },
    {
        ret_name: "Canadian Tire",
        ret_site: 'www.canadiantire.ca'
    },
    {
        ret_name: "Indigo",
        ret_site: 'www.chapters.indigo.ca'
    },
    {
        ret_name: "Walmart Supercentre",
        ret_site: 'www.walmart.com'
    },
    {
        ret_name: "BKIND",
        ret_site: 'www.bkind.com'
    },
    {
        ret_name: "Organicbasics",
        ret_site: 'www.us.organicbasics.com'
    },
    {
        ret_name: "Banana Republic",
        ret_site: 'www.bananarepublic.gapcanada.ca'
    },
    {
        ret_name: "ULINE",
        ret_site: 'www.uline.ca'
    },
    {
        ret_name: "Lilhelper",
        ret_site: 'www.lilhelper.ca'
    },
    {
        ret_name: "Etsy",
        ret_site: 'www.etsy.com'
    },
    {
        ret_name: "Natural Area Rugs",
        ret_site: 'www.naturalarearugs.com'
    },
    {
        ret_name: "Mitsubishi Motors",
        ret_site: 'www.mitsubishi-motors.ca'
    },
    {
        ret_name: "Philips",
        ret_site: 'www.lighting.philips.ca'
    },
    {
        ret_name: "Blueland",
        ret_site: 'www.blueland.com'
    },
    {
        ret_name: "Lush",
        ret_site: 'www.lush.ca'
    },
    {
        ret_name: "Sqwishful",
        ret_site: 'www.sqwishful.com'
    },
    {
        ret_name: "Twist",
        ret_site: 'www.twistclean.com'
    },
    {
        ret_name: "Staples",
        ret_site: 'www.staple.ca'
    },
    {
        ret_name: "SMEAD",
        ret_site: 'www.smead.com'
    },
    {
        ret_name: "COALATREE",
        ret_site: 'www.coalatree.com'
    },
    {
        ret_name: "KICKSTARTER",
        ret_site: 'www.kickstarter.com'
    },
    {
        ret_name: "Sprout World",
        ret_site: 'www.sproutworld.com'
    },
];

const seedRetailers = () => Retailer.bulkCreate(retailerData);

module.exports = seedRetailers; 