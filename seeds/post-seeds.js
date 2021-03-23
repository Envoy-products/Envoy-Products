const { Post } = require('../models');

const postData = [

    {
        title: 'TIPS TO START A GREEN BUSINESS IN CANADA',
        post_content: "The demand for ecologically friendly, green products has never been higher. And, If you are reading this blog post, I imagine you’re exploring the possibilities of launching your own green business. Bravo! You’re taking on a big challenge and some risks, but you’ll also benefit from more support for your journey than ever before. Today, a solid core of smart, dedicated, and creative people in the private sector and government is deepening the roots of the green business sector in the Canadian economy. If you’re looking to tap into this thriving industry, below you’ll find seven helpful tips to get started. @1.Figure Out Your Environmental Passion. @2.Decide if You Want to Start a Green Business—Or Something Else. @3.Do Your Research. @4.Determine if You Want to Start a Small Green Lifestyle Business or a Start-up That Can Scale. @5.Talk to Your Family/Support System. @6.Network and Learn. @7.Follow an Established Footprint.",
        post_url: 'https://smallbusinessbc.ca/article/7-tips-start-green-business-canada',
        user_id: 2,
        post_status: "Approved"
    },

    
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;