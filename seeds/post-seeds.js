const { Post } = require('../models');

const postData = [
    {
        title: 'Think globally, drive locally',
        post_content: "A couple of years ago I was in the market for a new car, and I had my heart set on getting a fully electric vehicle (EV). But I soon discovered that an EV with a good range, in the size I want and also available in my price range did not exist. So, I compromised and decided to get a plugin hybrid (PHEV). Eventually I settled on the 2018 Mitsubishi Outlander PHEV and while I was mostly happy with the car, I was disappointed that the electric battery held such a small charge. On a good day (one that is mild enough that I don’t need to use the heater or AC, I’m lucky if I can get 40 km out of the car before the battery runs out and the car switches to gas. \n\nAt first, this bothered me. It really didn’t feel like 40km, out of a total range of more than 500km was going to make much of an impact. But what I didn’t consider was my regular driving habits. For the most part, I drive to the train station and back (about 10 kms round trip) and on the weekends I go grocery shopping (about 30 kms total driving, depending on how many stores I hit). So, it was only when I did things out of the ordinary like visit the in-laws in Ajax, that I ended up dipping into the gas tank.\n\nThere are of course climate issues to consider. In the winter, when using the heater (or in the summer when using the AC) the battery range drops quite a bit. But I have found that once the car warms up, if you switch on the seat warmers, you can turn off the heater and still be quite comfortable. In fact, if you have a garage, you'll find sometimes you don't need to turn on the heat at all. Even so, fuel consumption does go up in the winter, because the car will not run off the battery until it is sufficiently warmed. So, even with a full battery, you will use gasoline for the first few minutes of driving.\n\nWith all that said, the amount of gasoline I use has been significantly reduced. My previous car was a Ford Escape and it cost about $60 to fill the tank (with gas at around $1.10/litre). I used to refuel that car about 3 times a month, which means I spent about $2,160/year on gas and used about 1,964 litres of gasoline per year. With my driving habits, I gas up the Outlander at most 11 times per year, and it has a smaller tank, so at $1.10/litre, I’m spending about $40 to fill the tank. I’m only spending about $440 per year on gasoline and using about 400 litres of gas. \n\nIf you’re someone who mostly drives locally and you are looking to reduce your carbon footprint, or even reduce the amount you pay for gasoline, a PHEV might just be the car you’re looking for.",
        post_url: 'https://www.canadadrives.ca/blog/car-guide/best-plug-in-hybrid-vehicles',
        user_id: 1,
        post_status: "approved"
    },
    {
        title: 'Is organic really better for the environment?',
        post_content: "It seems intuitively true that organic produce would not only be healthier, but also better for the environment. Some say that isn't necessarily true. Organic farming tends to have lower yields, so that means more land is required to grow organic food and more fuel is burned, planting, fertilizing, applying pesticided and herbicides (it is a myth that organic crops are pesticide free) and harvesting. And, while many people worry about the chemical pesticides that get sprayed on non-organic crops, the fact is that those pesticides have been developed to target only what threatens the crop and do less damage to the environment. They are also formulated to minimize the amount that needs to be applied. Organic pesticides are more general toxins that can actually do more extensive harm to the environment and often need to be applied in much higher doses.",
        post_url: null,
        user_id: 3,
        post_status: "featured"
    },
    {
        title: 'The Environment sucks and this site is lame',
        post_content: "Title says it all! Suck it you socialists!",
        post_url: 'http://www.foxnews.com/',
        user_id: 2,
        post_status: "pending"
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;