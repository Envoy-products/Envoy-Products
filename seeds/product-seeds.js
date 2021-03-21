const { Product, ProductRet } = require('../models');

const productData = [
    {
        name:"Product 1", 
        description:"sample description", 
        website: "https://example.com", 
        product_img: "https://example.com",
        status:"pending",
        category_id: 1,
        user_id: 1,
        retailerIds: [1, 2]
    },
    {
        name:"Product 2", 
        description:"sample description", 
        website: "https://example.com", 
        product_img: "https://example.com",
        status:"approved",
        category_id: 1,
        user_id: 1,
        retailerIds: [1, 2]
    },
    {
        name:"Product 3", 
        description:"sample description", 
        website: "https://example.com", 
        product_img: "https://example.com",
        status:"featured",
        category_id: 1,
        user_id: 1,
        retailerIds: [1, 2]
    } 
];

const seedProducts = async () => {
    const productTableData = productData.map(({retailerIds, ...rest}) => ({...rest}));
    const products = await Product.bulkCreate(productTableData);
    
    let productRetData = [];
    products.map(product => {
        const retailerIdsArr = productData[product.id - 1].retailerIds
        if (retailerIdsArr.length) {
            retailerIdsArr.map(retailer_id => productRetData.push({
                product_id: product.id,
                retailer_id,
            }));
        }
    });
    return ProductRet.bulkCreate(productRetData);
}

module.exports = seedProducts;
