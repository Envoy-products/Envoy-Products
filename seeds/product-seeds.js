const { Product } = require('../models');
const productData = [
    {
        name:"Apple M1 MacBook Air", 
        description:"The M1 MacBook Air is made of 100% recycled materials, has minimal packaging and doesn’t use harmful chemicals like arsenic, mercury, PVC and beryllium. The new M1 chip uses 3 times less power than a comparably performing Intel chip.", 
        website: "https://www.apple.com", 
        product_img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gallery3-20201110?wid=4000&hei=3072&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1603399121000",
        status:"pending",
        category_id: 2,
        retailerIds: [1, 2]
    },
    {
        name:"Hyundai Kona Electric", 
        description:"Tesla isn't the only car company with a viable electric car. The Kona has a range of up 415 km and can charge to 80% in less than an hour. ", 
        website: "https://www.hyundaicanada.com/en/showroom/2021/kona-electric/", 
        product_img: "https://www.hyundaicanada.com/-/media/hyundai/showroom/2021/kona-electric/featuregrid/exterior/desktop/konaev_exterior_f1.jpg",
        status:"approved",
        category_id: 3,
        retailerIds: [4]
    },
    {
        name:"Mrs. Meyers Clean Day Laundry Detergent", 
        description:"Concentrated formula means less packaging. Contains no no parabens, phthalates, or artificial colors. Packaging is 100% recyclable. Detergent is not tested on animals.", 
        website: "https://www.mrsmeyers.com/product/laundry/", 
        product_img: "https://cdn11.bigcommerce.com/s-4akt4aa4m/images/stencil/1280x1280/products/188/619/mrs_meyers_lavender_laundry_detergent_english_label__75309.1598962406.png?c=2",
        status:"featured",
        category_id: 4,
        retailerIds: [1,5,6]
    },
    {
        name:"BKind Biodegradable toothbrush", 
        description:"This toothbrush is made from biodegradable and sustainable bamboo. The bristles are infused with charcoal to help whiten your teeth.", 
        website: "https://bkind.com/products/natural-bamboo-toothbrush-biodegradable?_pos=5&_sid=75fea99b8&_ss=r&variant=33089048707175", 
        product_img: "https://cdn.shopify.com/s/files/1/1178/9804/products/biodegradable-bamboo-toothbrush-bkind_1296x.jpg?v=1578410873",
        status:"approved",
        category_id: 6,
        retailerIds: [7,8,9]
    },
    {
        name:"Knitted crewneck sweater made with 100% recycled merino", 
        description:"This toothbrush is made from biodegradable and sustainable bamboo. The bristles are infused with charcoal to help whiten your teeth.", 
        website: "https://us.organicbasics.com/products/mens-recycled-wool-knit-sweater", 
        product_img: "https://cdn.shopify.com/s/files/1/0081/4255/3199/products/dmf3ws414nviphydm9gl_1001x1300_crop_center.jpg?v=1606246100",
        status:"pending",
        category_id: 7,
        retailerIds: [10,11]
    },
    {
        name:"Biodegradable Jute Bags", 
        description:"Biodegradable Bags made of 100% natural jute fiber and can hold upto 50 lbs", 
        website: "https://www.uline.ca/Product/Detail/S-8422/Burlap-and-Cloth-Bags/Burlap-Bags-8-x-12?pricode=YD275&gadtype=pla&id=S-8422&gclid=Cj0KCQjw0caCBhCIARIsAGAfuMyOgHbrA9im8TcmazE7PKN9sz8Rdw-t0-N0pqedmzrq6qqmyqaLb4EaAhg8EALw_wcB&gclsrc=aw.ds", 
        product_img: "https://www.uline.ca/Product/Detail/S-8422/Burlap-and-Cloth-Bags/Burlap-Bags-8-x-12?pricode=YD275&gadtype=pla&id=S-8422&gclid=Cj0KCQjw0caCBhCIARIsAGAfuMyOgHbrA9im8TcmazE7PKN9sz8Rdw-t0-N0pqedmzrq6qqmyqaLb4EaAhg8EALw_wcB&gclsrc=aw.ds",
        status:"featured",
        category_id: 7,
        retailerIds: [8,12]
    },
    {
        name:"Whiff Bamboo Cloth", 
        description:"Whiff Bamboo Dishcloths & Kitchen Cloths, Sustainable, Scrubbing Power, Naturally Hygienic, Washable Absorbent Durable, Reusable, Cleaning Essentical, Dish Rags, Replace Your Sponge (BDC6X7inch)", 
        website: "https://www.amazon.ca", 
        product_img: "https://www.amazon.ca/dp/B07LFLLBSP?ots=1&ascsubtag=%5Bartid%7C2089.g.1435%5Bsrc%7C%5Bch%7C%5Blt%7C&linkCode=gs2&tag=hearstmagazin-20",
        status:"approved",
        category_id: 7,
        retailerIds: [1,13]
    },
    {
        name:"ECO FRIENDLY Bamboo Mechanical Pencils", 
        description:"Whiff Bamboo Dishcloths & Kitchen Cloths, Sustainable, Scrubbing Power, Naturally Hygienic, Washable Absorbent Durable, Reusable, Cleaning Essentical, Dish Rags, Replace Your Sponge (BDC6X7inch)", 
        website: "https://www.amazon.ca/Whiff-Naturally-Absorbent-Sustainable-Antibacterial/dp/B07LFLLBSP", 
        product_img: "https://i.etsystatic.com/24011281/r/il/f1a090/2397916760/il_1588xN.2397916760_np1u.jpg",
        status:"featured",
        category_id: 1,
        retailerIds: [1,8,14]
    },
    {
        name:"Eco-friendly area rug", 
        description:"Handmade Tufted Wool Brown Area Rug that can be used in  living room, bedroom, study room, dining room, and foyer. The weaving of this rug is done in such a fashion that doesn't allow the dust to reach the inner surface and offers amazing durability.", 
        website: "https://www.wayfair.ca/rugs/sb1/eco-friendly-area-rugs-c215386-a1500~130083.html?refid=GX408533840636.Eco-friendly%20area%20rug~e&position=&network=g&pcrid=408533840636&device=c&targetid=kwd-4210828966&channel=WFCAIntent&gclid=Cj0KCQjwutaCBhDfARIsAJHWnHsqtBBA4FEkMQCMidv3gXKpIcCSFm0RuW6aKzZyctpDA8FMbBHb31YaAlzyEALw_wcB", 
        product_img: "https://secure.img1-fg.wfcdn.com/im/02357781/resize-h800-w800%5Ecompr-r85/4662/46628037/Creager+Oriental+Handmade+Tufted+Wool+Brown+Area+Rug.jpg",
        status:"approved",
        category_id: 8,
        retailerIds: [3,14,15]
    },
    {
        name:"Mitsubishi Outlander PHEV", 
        description:"For those who aren't yet ready to go fully electric, a plug-in hybrid helps get you used to using Electric, while still hace the option for gas when necessary. The Outlander is a roomy SUV with a an electric range of up to 40km.", 
        website: "https://www.mitsubishi-motors.ca/en/vehicle/showroom/outlander-phev/2020/", 
        product_img: "https://www.mitsubishi-motors.ca/media/showroom_angles/scaled/2020-mitsubishi-outlander-phev-gt-s-awc-red-diamond-right-view-lt-152652.png",
        status:"featured",
        category_id: 3,
        retailerIds: [16]
    },
    {
        name:"Biodegradable Plates", 
        description:"BioMart products have a chemical free eco-friendly manufacturing process that not contains any artificial glue, colour or wax coating on the surface. It's lightweight, leak proof, durable and maintains shape.", 
        website: "https://www.wayfair.ca/dining/pdp/biomart-shallow-round-1025-dinner-plate-bimr1071.html", 
        product_img: "https://secure.img1-fg.wfcdn.com/im/22350863/resize-h800-w800%5Ecompr-r85/1396/139655942/Shallow+Round+10.25%2522+Dinner+Plate.jpg",
        status:"approved",
        category_id: 9,
        retailerIds: [1,3]
    },
    {
        name:"Eco friendly bulb", 
        description:"BioMart products have a chemical free eco-friendly manufacturing process that not contains any artificial glue, colour or wax coating on the surface. It's lightweight, leak proof, durable and maintains shape.", 
        website: "https://www.wayfair.ca/Globe-Electric-Company--9.5-Watt-60-Watt-Equivalent--A19-LED-Dimmable-Light-Bulb-Warm-White-2700K-E26Medium-Standard-Base-31437-L338-K~HTBM1245.html?refid=GX185650380210-HTBM1245&device=c&ptid=735026337536&targetid=pla-735026337536&network=g&ireid=77243218&gclid=Cj0KCQjw0caCBhCIARIsAGAfuMyjPJpWK4B62LvRHIqPOpTix4ZWasiWJDsf0HQfDCfeUjZovzTUNmYaAgarEALw_wcB", 
        product_img: "https://secure.img1-fg.wfcdn.com/im/16493469/resize-h800%5Ecompr-r85/7724/77243218/9.5+Watt+%252860+Watt+Equivalent%2529%252C+A19+LED%252C+Dimmable+Light+Bulb%252C+Warm+White+%25282700K%2529+E26/Medium+%2528Standard%2529+Base.jpg",
        status:"approved",
        category_id: 8,
        retailerIds: [1,3]
    },
    {
        name:"The Clean Up Kit", 
        description:"Reusable shatterproof bottle, which comes with environmentally safe tables for cleaning once mixed with water",
        website: "https://www.blueland.com/products/the-clean-up-kit", 
        product_img: "https://www.blueland.com/collections/our-kits/products/the-clean-up-kit?utm_source=RAN&utm_medium=affiliates&utm_campaign=10&utm_content=TnL5HPStwNw&ranMID=44816&ranEAID=TnL5HPStwNw&ranSiteID=TnL5HPStwNw-nIlvmjNcdES8RTIhyKlI4w",
        status:"featured",
        category_id: 5,
        retailerIds: [18]
    },
    {
        name:"Shampoo Bar", 
        description:"All-natural shampoo bar that nourishes your scalp and our planet, eliminating single-use plastic from your routine",
        website: "https://byhumankind.com/products/shampoo", 
        product_img: "https://byhumankind.com/products/shampoo?irclickid=Q8sWAdUFVxyLUl80TbWK8Xs3UkEVpn0hrS2cyE0&irgwc=1&utm_source=affiliate&utm_medium=referral&utm_campaign=Skimbit%20Ltd._bestproducts.com&utm_term=Online%20Tracking%20Link",
        status:"featured",
        category_id: 6,
        retailerIds: [18, 19]
    },
    {
        name:"Pop-up Sponge", 
        description:"Sqwishful pop up sponges are 100% plant-based and made from natural wood pulp with zero plastic or dyes.",
        website: "https://sqwishful.com/products/pop-up-sponges", 
        product_img: "https://sqwishful.com/products/pop-up-sponges",
        status:"featured",
        category_id: 5,
        retailerIds: [1,20]
    },
    {
        name:"Eco friendly Spaghetti Corn Scrubs", 
        description:"This product works astonishingly well, and is much less wasteful than having to throw away a cheap cookware scrubber every few weeks. It's comprised of cotton strips and pulverized, dried corn cobs, giving its noodle-like strands a coarse, but not too rough texture. These can even be thrown into the washing machine to continue to use for months on end.",
        website: "https://www.amazon.ca/dp/B07QS5QLXK?slotNum=2&ots=1&ascsubtag=[artid|2089.g.1435[src|[ch|[lt|&linkCode=gs2&imprToken=acbc2975-677e-1ea9-4fc&tag=hearstmagazin-20", 
        product_img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1609867018-spaghetti-scrubber-1609867015.jpg?crop=1xw:1xh;center,top&resize=480:*",
        status:"featured",
        category_id: 5,
        retailerIds: [1,21]
    },
    {
        name:"Expanding file", 
        description:"This 12-pocket expanding file is made of 100% recycled stock and comes in two nature-inspired colors. The expanding file is indexed three ways: Alphabetic (A-Z), Monthly (January-December in English and French) and Daily (1-31) for optimal filing flexibility. ",
        website: "https://www.smead.com/Director.aspx?NodeId=7", 
        product_img: "https://www.smead.com/images/product/400/70778e.jpg",
        status:"featured",
        category_id: 1,
        retailerIds: [1,22,23]
    },
    {
        name:"Evolution Hoodie: Made from recycled coffee grounds", 
        description:"Coalatrees' most innovative product to date, the Evolution Hoodie has over 20 features for everyday wear plus travel and adventure! ",
        website: "https://coalatree.com/products/copy-of-evolution-hoodie-made-from-recycled-coffee-grounds?_pos=2&_sid=1a0368926&_ss=r", 
        product_img: "https://cdn.shopify.com/s/files/1/2009/9335/products/EvolutionHoodieNOBG_1600x.png?v=1612901919",
        status:"featured",
        category_id: 7,
        retailerIds: [24,25]
    },
    {
        name:"NOMAD Packable Backpack", 
        description:"100% recycled durable ripstop nylon with eco-friendly water-repellent coating.The Nomad Packable Backpack was designed to make life on the go easier.",
        website: "https://coalatree.com/collections/all-no-route/products/nomad-packable-backpack-black", 
        product_img: "https://cdn.shopify.com/s/files/1/2009/9335/products/nomad-black-1_1600x.jpg?v=1589928053",
        status:"featured",
        category_id: 1,
        retailerIds: [3,24]
    },
    {
        name:"Sprout Plantable Graphite Pencils", 
        description:"With Sprout's pencil sets, they can enjoy a second life as a plant! Available in both graphite and colored sets, and made of FSC-certified wood, these nontoxic writing utensils can be sharpened and used just like any other pencil, but when they become too stubby to use, you can plant them end-side down, which will release the plant seeds inside of their caps.",
        website: "https://sproutworld.com/plant-a-green-mindset-with-a-sproutpencil/", 
        product_img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1609866845-plantable-pencils-1609866841.gif?crop=1xw:1xh;center,top&resize=480:*",
        status:"featured",
        category_id: 1,
        retailerIds: [1,26]
    },
    {
        name:"Recyclable Shopping Bags", 
        description:"Earth-friendly bags for environmentally conscious shoppers. Meet most U.S. recycled paper bag requirements. 100% recycled with post-consumer content. Matte finish 60 lb. paper. Strong twisted paper handles.",
        website: "https://www.uline.ca/Product/Detail/S-19974/Paper-Shopping-Bags/Recycled-Paper-Shopping-Bags-8-x-4-3-4-x-10-1-4-Cub?pricode=YF152&gadtype=pla&id=S-19974&gclid=Cj0KCQjw0caCBhCIARIsAGAfuMzHk6R-ei54NGQ5NfiI5qrtUz2NvCZ7YM9nOMJLS7fxpw24trpY_WYaAtWzEALw_wcB&gclsrc=aw.ds", 
        product_img: "https://images.uline.com/is/image/content/dam/images/S/S20000/S-19974.jpg?$MediumRHD$&iccEmbed=1&icc=AdobeRGB",
        status:"featured",
        category_id: 8,
        retailerIds: [1,12,22]
    },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;




