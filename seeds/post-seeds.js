const { Post } = require('../models');

const postData = [

    {
        title: 'TIPS TO START A GREEN BUSINESS IN CANADA',
        post_content: "The demand for ecologically friendly, green products has never been higher. And, If you are reading this blog post, I imagine you’re exploring the possibilities of launching your own green business. Bravo! You’re taking on a big challenge and some risks, but you’ll also benefit from more support for your journey than ever before. Today, a solid core of smart, dedicated, and creative people in the private sector and government is deepening the roots of the green business sector in the Canadian economy. If you’re looking to tap into this thriving industry, below you’ll find seven helpful tips to get started. @1.Figure Out Your Environmental Passion. @2.Decide if You Want to Start a Green Business—Or Something Else. @3.Do Your Research. @4.Determine if You Want to Start a Small Green Lifestyle Business or a Start-up That Can Scale. @5.Talk to Your Family/Support System. @6.Network and Learn. @7.Follow an Established Footprint.",
        post_url: 'https://smallbusinessbc.ca/article/7-tips-start-green-business-canada',
        user_id: 2,
        post_status: "Approved"
    },

    {
        title: 'Green and competitive: Influences on environmental new product development performance',
        post_content: "This article reports the findings of a large-scale research project on environmental new product development (ENPD) within British manufacturers. A major contribution of this article is the attempt to integrate new product development (NPD) and environmental management philosophies in order to develop and empirically test a theoretical framework for ENPD and performance. As such, it is one of the first studies to go beyond the anecdotal evidence in the extant literature, to empirically research ENPD activities and their impacts. This contributes to the debate about the potential for firms to be “green and competitive” by examining the relationship between ENPD activities and market and eco-performance for environmental new products. Contrary to the popular perception, the results suggest that there is more synergy than conflict between the conventional and environmental product development paradigms.",
        post_url: 'https://www.sciencedirect.com/science/article/abs/pii/S0148296301003101',
        user_id: 6,
        post_status: "featured"
    },
    {
        title: 'Eighty per cent of small businesses try to go green, without government urging: CFIB study',
        post_content: "While many suggest that Canada’s business community is not doing enough to protect the environment, the Canadian Federation of Independent Business’s new report, Green Growth, shows that going green is a priority for a majority of small businesses. Rather than needing government to force environmental change, the data show small firms are on board because they believe it is the right thing to do. Over 80 per cent of entrepreneurs are motivated to make change because of their personal views, 50 per cent because it helps reduce their costs and one-third because they believe action is important to their customers and employees. Only 22 per cent said they were motivated by government policy.",
        post_url: 'https://financialpost.com/entrepreneur/small-business/0424-biz-dk-cfib',
        user_id: 3,
        post_status: "approved"
    },

    {
        title: 'How Product–Environment Brightness Contrast and Product Disarray Impact Consumer Choice in Retail Environments',
        post_content: "A conceptual model is developed to predict how consumers respond to in-store displays as a function of the extent to which a product’s brightness level (i.e., its perceived light-emitting quality) contrasts with that of its background environment and the product’s level of disarray. We show that products whose brightness levels contrast more with those of the retail environment are more preferred because they visually “pop out” (e.g., a dark product in a brightly lit store environment). However, this preference reverses when the products that pop out appear in disarray (i.e., are perceived to have been previously touched by other shoppers). Because most stores are bright environments, darker (vs. lighter) products in disarray are more likely to be perceived as contaminated and less pleasant, leading to avoidance behaviors, evident in reduced sales and preference. Theoretical and managerial implications are discussed.",
        post_url: 'https://www.sciencedirect.com/science/article/abs/pii/S0022435917300295',
        user_id: 4,
        post_status: "approved"
    },
    {
        title: 'Environmental sustainability becoming a business imperative',
        post_content: "The 2019 Consumer insights survey clearly demonstrates that manufacturers and retailers need to pay attention to what consumers are saying about environmental sustainability if they’re going to keep current customers and attract new ones. The next generation (generation Z) merits particular consideration. Even more than millennials, this generation wants to take action on social and environmental issues by putting their money where their mouth is. For example, 47% of those aged 18 to 24 said they’re willing to pay a premium for environmentally friendly food offerings, which was higher than the 35% finding for respondents between the ages of 25 and 34. At the same time, companies need to view sustainability as something that’s attainable for all. For example, can producers find ways to make more sustainable packaging at a lower cost? Are retailers willing to absorb some of this cost, change their distributor relationships or take another look at their supply chain? Many businesses are already responding to customer demands by looking to their supply chain to cut costs, promote efficiencies and, in general, become more sustainable. Clearly, sustainability can no longer be seen as a nice feature to add to a product. It’s quickly becoming the way of doing business.",
        post_url: 'https://www.pwc.com/ca/en/industries/retail-consumer/environmental-sustainability-becoming-a-business-imperative.html',
        user_id: 2,
        post_status: "approved"
    },
    {
        title: 'Restoring urban mobility should not come at the expense of the environment.',
        post_content: "Despite the evident challenges to greening urban transport during this time, concrete policy responses exist to respond to and influence mobility patterns as demand for urban travel returns to pre-crisis levels. Given the significance of the transport sector for the environment, public health, and societal resilience in the long term, the pursuit of sustainable, inclusive transport systems should remain a strong policy focus as the world emerges from the Covid-19 crisis. The OECD has issued a number of policy briefs outlining strategies for policy makers to respond to the Covid-19 crisis. These aim to ensure that recovery policies are compatible with a low-carbon transition and to highlight responses to the various uncertainties posed by the pandemic.",
        post_url: 'https://oecd-environment-focus.blog/2020/07/24/the-challenges-of-greening-urban-mobility-in-the-post-pandemic-era',
        user_id: 5,
        post_status: "approved"
    },
    {
        title: 'Urban green growth is about asking the right questions at the right time',
        post_content: "Cities and urban areas represent unrivalled concentrations of people, economic growth, commercial networks, and innovation – and have the potential to make a significant contribution to the transition towards a low-carbon world. A starting point would be to explore multi-level governance solutions that allow cities to continue developing in a sustainable manner. this Forum is about exploring opportunities for local actions that can make a significant contribution to green growth. This includes designing urban green growth policies that range from land-use regulation and planning, taxation, transport, energy efficiency, waste, water management to public procurement. Similarly important is to select adequate green growth indicators and monitoring systems at the subnational levels to track progress. Many cities are aware that there is scope to reduce their energy consumption and overall share of global CO2 emissions by replicating best practices. The GGSD Forum will show that implementing these policies is not only desirable and possible, but that it needs to start now.",
        post_url: 'https://oecdinsights.org/2016/11/04/urban-green-growth-is-about-asking-the-right-questions-at-the-right-time/',
        user_id: 1,
        post_status: "approved"
    },

    {
        title: 'Environmental Impacts of Products: A Detailed Review of Studies',
        post_content: "Environmental effects of economic activities are ultimately driven by consumption, via impacts of the production, use, and waste management phases of products and services ultimately consumed. Integrated product policy (IPP) addressing the life-cycle impacts of products forms an innovative new generation of environmental policy. Yet this policy requires insight into the final consumption expenditures and related products that have the greatest life-cycle environmental impacts. This review article brings together the conclusions of 11 studies that analyze the life-cycle impacts of total societal consumption and the relative importance of different final consumption categories. This review addresses in general studies that were included in the project Environmental Impacts of Products (EIPRO) of the European Union (EU), which form the basis of this special issue. Unlike most studies done in the past 25 years on similar topics, the studies reviewed here covered a broad set of environmental impacts beyond just energy use or carbon dioxide (CO2) emissions. The studies differed greatly in basic approach (extrapolating LCA data to impacts of consumption categories versus approaches based on environmentally extended input-output (EEIO) tables), geographical region, disaggregation of final demand, data inventory used, and method of impact assessment. Nevertheless, across all studies a limited number of priorities emerged. The three main priorities, housing, transport, and food, are responsible for 70% of the environmental impacts in most categories, although covering only 55% of the final expenditure in the 25 countries that currently make up the EU. At a more detailed level, priorities are car and most probably air travel within transport, meat and dairy within food, and building structures, heating, and (electrical) energy-using products within housing. Expenditures on clothing, communication, health care, and education are considerably less important. Given the very different approaches followed in each of the sources reviewed, this result hence must be regarded as extremely robust. Recommendations are given to harmonize and improve the methodological approaches of such analyses, for instance, with regard to modeling of imports, inclusion of capital goods, and making an explicit distinction between household and government expenditure.",
        post_url: 'https://www.researchgate.net/publication/227735429_Environmental_Impacts_of_Products_A_Detailed_Review_of_Studies',
        user_id: 3,
        post_status: "approved"
    },

    {
        title: 'Think globally, drive locally',
        post_content: "A couple of years ago I was in the market for a new car, and I had my heart set on getting a fully electric vehicle (EV). But I soon discovered that an EV with a good range, in the size I want and also available in my price range did not exist. So, I compromised and decided to get a plugin hybrid (PHEV). Eventually I settled on the 2018 Mitsubishi Outlander PHEV and while I was mostly happy with the car, I was disappointed that the electric battery held such a small charge. On a good day (one that is mild enough that I don’t need to use the heater or AC, I’m lucky if I can get 40 km out of the car before the battery runs out and the car switches to gas. \n\nAt first, this bothered me. It really didn’t feel like 40km, out of a total range of more than 500km was going to make much of an impact. But what I didn’t consider was my regular driving habits. For the most part, I drive to the train station and back (about 10 kms round trip) and on the weekends I go grocery shopping (about 30 kms total driving, depending on how many stores I hit). So, it was only when I did things out of the ordinary like visit the in-laws in Ajax, that I ended up dipping into the gas tank.\n\nThere are of course climate issues to consider. In the winter, when using the heater (or in the summer when using the AC) the battery range drops quite a bit. But I have found that once the car warms up, if you switch on the seat warmers, you can turn off the heater and still be quite comfortable. In fact, if you have a garage, you'll find sometimes you don't need to turn on the heat at all. Even so, fuel consumption does go up in the winter, because the car will not run off the battery until it is sufficiently warmed. So, even with a full battery, you will use gasoline for the first few minutes of driving.\n\nWith all that said, the amount of gasoline I use has been significantly reduced. My previous car was a Ford Escape and it cost about $60 to fill the tank (with gas at around $1.10/litre). I used to refuel that car about 3 times a month, which means I spent about $2,160/year on gas and used about 1,964 litres of gasoline per year. With my driving habits, I gas up the Outlander at most 11 times per year, and it has a smaller tank, so at $1.10/litre, I’m spending about $40 to fill the tank. I’m only spending about $440 per year on gasoline and using about 400 litres of gas. \n\nIf you’re someone who mostly drives locally and you are looking to reduce your carbon footprint, or even reduce the amount you pay for gasoline, a PHEV might just be the car you’re looking for.",
        post_url: 'https://www.canadadrives.ca/blog/car-guide/best-plug-in-hybrid-vehicles',
        user_id: 6,
        post_status: "approved"
    },
    {
        title: 'Is organic really better for the environment?',
        post_content: "It seems intuitively true that organic produce would not only be healthier, but also better for the environment. Some say that isn't necessarily true. Organic farming tends to have lower yields, so that means more land is required to grow organic food and more fuel is burned, planting, fertilizing, applying pesticided and herbicides (it is a myth that organic crops are pesticide free) and harvesting. And, while many people worry about the chemical pesticides that get sprayed on non-organic crops, the fact is that those pesticides have been developed to target only what threatens the crop and do less damage to the environment. They are also formulated to minimize the amount that needs to be applied. Organic pesticides are more general toxins that can actually do more extensive harm to the environment and often need to be applied in much higher doses.",
        post_url: null,
        user_id: 2,
        post_status: "featured"
    },

    {
        title: 'Air pollution, the invisible killer',
        post_content: "Air pollution has become the biggest environmental cause of premature death, overtaking poor sanitation and a lack of clean drinking water. According to the WHO, more than 3.5 million people are being killed each year by the air that they breathe in urban areas, and the number is rising. Air pollution now kills twice as many people as HIV/AIDS. That’s the stark message from the latest OECD report, The Cost of Air Pollution: Health Impacts of Road Transport. There is an economic price to pay too. One of the tools used to quantify the costs associated with air pollution is the Value of Statistical Life (VSL), which estimates the value people attach to avoiding premature death from pollution. VSL can thus illustrate relative benefits of different policy options in terms of their effects on people’s wellbeing. On the basis of this methodology, the report shows that the cost of deaths and illness from air pollution increased by about 10% between 2005 and 2010, reaching USD 1.7 trillion in OECD countries alone.",
        post_url: 'http://oecdinsights.org/2014/06/05/air-pollution-the-invisible-killer',
        user_id: 1,
        post_status: "Approved"
    },

    {
        title: 'Environmental education: Knowledge is power!',
        post_content: "Environmental education is a tool for raising awareness and a main driver behind citizen’s engagement in democratic processes concerning the environment. The other components supporting enhanced environmental democracy include citizens’ participation in environmental decision-making, environmental information, and access to environmental justice. Unfortunately, environmental education has received less attention from policy-makers and the wider public, compared to other environmental democracy aspects. This is primarily due to data gaps and the difficulty in establishing sound indicators. However, it is important to note that this can often occur as a result of domestic political challenges and ideological opposition.",
        post_url: null,
        user_id: 2,
        post_status: "Approved"
    },
    {
        title: 'Household Cleaning Products Can Be Harmful to the Environment',
        post_content: "Many customers are already aware of the direct dangers regular cleaning products can pose to human and pet health in our homes, which is why they choose all-natural cleaning products without toxins, chemicals or fragrances. However, regular cleaning products also have negative effects on flora and fauna of our planet. When people clean their homes, dishes, clothes or carpets with cleaning products containing unsafe ingredients, most of these harmful substances will wash down the drain and into our wastewater treatment system. Most ingredients break down quickly in or soon after the wastewater treatment facilities, but unfortunately, our facilities are not equipped to filter out all the chemicals in the wastewater so that many chemicals end up our fresh and saltwater ecosystems where they are extremely dangerous to animals, plants and ultimately, to our drinking water and health. And if you are living or vacationing 'off the grid' and are using a septic system, certain ingredients of regular cleaning products can kill the bacteria of your septic tank, stop the water separation and ultimately poison the surrounding waterways with untreated waste water, chemicals and toxins. Septic systems require a lot of forethought and consideration, so be sure to read up on septic safe products and which ingredients to avoid before going to your cabin! Cleaning Products that harm the environment @Triclosan @1,4-Dioxane @Nonylphenol ethoxylates (NPEs) @Phosphates @Phthalates @Quaternary Ammonium Compounds (QUATs or QACs)  @Volatile Organic Compounds (VOCs) @Methylisothiazolinone (MI)",
        post_url: 'https://www.aspenclean.com/blog/the-environmental-dangers-of-using-cleaning-products',
        user_id: 4,
        post_status: "featured"
    },

    {
        title: 'The Environment sucks and this site is lame',
        post_content: "Title says it all! Suck it you socialists!",
        post_url: 'http://www.foxnews.com/',
        user_id: 5,
        post_status: "pending"
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;