const router = require('express').Router();
const { Product, User, Category, ProductRet, Rating, Review, Retailer } = require('../../models');
const sequelize = require('../../config/connection');
const { auth } = require('../../utils/auth');

// Get all products
router.get('/', (req, res) => {
    // find all products
    Product.findAll({
        attributes: [
            'id',
            'name',
            'description',
            'website',
            'product_img',
            'status'
        ],
        include: [
            {
                model: User,
                attributes: [
                    'id',
                    'avatar',
                    [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = product.user_id)"), 'full_name']
                ]
            },
            {
                model: Category,
                attributes: [
                    'id',
                    'category_name'
                ]
            },
            {
                model: Retailer,
                through: ProductRet
            }
        ]
    })
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get single product 
router.get('/:id', (req, res) => {
    // find one product by its `id` value
    Product.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'name', 'description', 'website', 'product_img', 'status'],
        include: [
            {
                model: User,
                attributes: [
                    'id',
                    'avatar',
                    [sequelize.literal("(SELECT CONCAT(first_name, ' ', last_name) FROM user WHERE user.id = product.user_id)"), 'full_name']
                ]
            },
            {
                model: Category,
                attributes: [
                    'id',
                    'category_name'
                ]
            },
            {
                model: Review,
                attributes: [
                    'id',
                    'content',
                    'product_id'
                ],
                include: [
                    {
                        model: User,
                        attributes: [
                            'id',
                            'avatar',
                            'first_name',
                            'last_name'
                        ]
                    },
                    {
                        model: Rating
                    },
                ]
            },
            {
                model: Retailer,
                through: ProductRet
            }
        ]
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a new product
router.post('/', auth, (req, res) => {
    // create a new product
    // expects from req.body: 
    // {
    //     name:'sample name', 
    //     description:'sample description', 
    //     website: 'https://example.com', 
    //     product_img: 'https://example.com', 
    //     category_id: 1
    //     retailerIds: [1,2]
    // }
    let data = {};
    Product.create({
        name: req.body.name,
        description: req.body.description,
        website: req.body.website,
        product_img: req.body.product_img,
        category_id: req.body.category_id,
        retailerIds: req.body.retailerIds,
        user_id: req.session.user_id
    })
        .then(product => {
            data.product = product;
            if (req.body.retailerIds.length) {
                const productRetIdArr = req.body.retailerIds.map((retailer_id) => {
                    return {
                        product_id: product.id,
                        retailer_id,
                    };
                });
                return ProductRet.bulkCreate(productRetIdArr);
            }
            return;
        })
        .then((productRetData) => {
            data.productRet = productRetData;
            res.status(201).json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', auth, (req, res) => {
    // updates an existing product
    // expects from req.body: {name:'sample name', description:'sample description', website: 'https://example.com', product_img: 'https://example.com', status: "pending", category_id: 1} 
    let data = {};
    Product.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(product => {
            data.product = product;
        
            return ProductRet.findAll({
                where: {
                    product_id: req.params.id
                }
            });
        })
        .then(productRets => {
            // get list of existing retailer_ids associated with this product id
            const productRetIds = productRets.map(({ retailer_id }) => retailer_id);

            // create filtered list of new retailer_ids
            const newProductRets = req.body.retailerIds
                .filter((retailer_id) => !productRetIds.includes(retailer_id))
                .map((retailer_id) => {
                    return {
                        product_id: req.params.id,
                        retailer_id,
                    };
                });
            // create a list of retailer_ids to remove
            const productRetsToRemove = productRets
                .filter(({ retailer_id }) => !req.body.retailerIds.includes(retailer_id))
                .map(({ id }) => id);

            // run both actions as Promises
            return Promise.all([
                ProductRet.destroy({ where: { id: productRetsToRemove } }),
                ProductRet.bulkCreate(newProductRets),
            ]);
        })
        .then((updatedProductRetData) => {
            data.productRet = updatedProductRetData;
            res.status(201).json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete a product
router.delete('/:id', auth, (req, res) => {
    // delete a product by its `id`
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
