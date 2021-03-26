const { Retailer, RegionRet } = require('../models');

const retailerData = [
    {
        ret_name: 'Amazon',
        ret_site: 'www.amazon.ca',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: 'Apple',
        ret_site: 'www.apple.com',
        regionIds: [5, 9, 10]
    },
    {
        ret_name: 'Wayfair',
        ret_site: 'www.wayfair.ca',
        regionIds: [10, 20, 40]
    },
    {
        ret_name: 'Hyundaicanada',
        ret_site: 'www.hyundaicanada.com',
        regionIds: [51, 22, 64]
    },
    {
        ret_name: "Mrs. Meyers",
        ret_site: 'www.mrsmeyers.com',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Canadian Tire",
        ret_site: 'www.canadiantire.ca',
        regionIds: [10, 2, 4]
    },
    {
        ret_name: "Indigo",
        ret_site: 'www.chapters.indigo.ca',
        regionIds: [10, 2, 4]
    },
    {
        ret_name: "Walmart Supercentre",
        ret_site: 'www.walmart.com',
        regionIds: [10, 2, 4]
    },
    {
        ret_name: "BKIND",
        ret_site: 'www.bkind.com',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Organicbasics",
        ret_site: 'www.us.organicbasics.com',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Banana Republic",
        ret_site: 'www.bananarepublic.gapcanada.ca',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "ULINE",
        ret_site: 'www.uline.ca',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Lilhelper",
        ret_site: 'www.lilhelper.ca',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Etsy",
        ret_site: 'www.etsy.com',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Natural Area Rugs",
        ret_site: 'www.naturalarearugs.com',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Mitsubishi Motors",
        ret_site: 'www.mitsubishi-motors.ca',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Philips",
        ret_site: 'www.lighting.philips.ca',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Blueland",
        ret_site: 'www.blueland.com',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Lush",
        ret_site: 'www.lush.ca',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Sqwishful",
        ret_site: 'www.sqwishful.com',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Twist",
        ret_site: 'www.twistclean.com',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Staples",
        ret_site: 'www.staple.ca',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "SMEAD",
        ret_site: 'www.smead.com',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "COALATREE",
        ret_site: 'www.coalatree.com',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "KICKSTARTER",
        ret_site: 'www.kickstarter.com',
        regionIds: [1, 2, 4]
    },
    {
        ret_name: "Sprout World",
        ret_site: 'www.sproutworld.com',
        regionIds: [1, 2, 4]
    },
];

const seedRetailers = async () => {
    const retailerTableData = retailerData.map(({regionIds, ...rest}) => ({...rest}));
    const retailers = await Retailer.bulkCreate(retailerTableData);
    
    let regionRetData = [];
    retailers.map(retailer => {
        const regionIdsArr = retailerData[retailer.id - 1].regionIds
        if (regionIdsArr.length) {
            regionIdsArr.map(region_id => regionRetData.push({
                retailer_id: retailer.id,
                region_id,
            }));
        }
    });
    return RegionRet.bulkCreate(regionRetData);
}

module.exports = seedRetailers; 