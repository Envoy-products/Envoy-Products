# Envoy
A Hub for members to post, rate, review and talk about environmentally friendly products!

## Table Of Content
* [General Info](#general-info)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Demo](#demo)
* [Questions](#questions)

## General Info
The application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Technologies
Project is created with 
* [MySQL](https://dev.mysql.com/downloads/)
* Javascript
* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Bootstrap](https://getbootstrap.com/)
* [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Flickity](https://www.npmjs.com/package/flickity)
* [jQuery Bar Rating](https://www.npmjs.com/package/jquery-bar-rating)
* [typed.js](https://www.npmjs.com/package/typed.js)

## Installation
To install Envoy locally, you will need a copy of M
To get started clone this repository using 
<br>
```terminal
git clone git@github.com:Envoy-products/Envoy-Products.git
```
Both Node.js and MySQL must be installed on your computer.

Install dependencies 
```terminal
npm install
``` 
Open up MySQL shell and input 
```terminal
source db/schema.sql
```
Quit MySQL shell and input te following to insert sample data into the database
```terminal
run np seeds
```
Enter the following to launch the server
```terminal
npm start
```
Once all that is done, navigate to - http://localhost:3001 to begin!


## Usage
This application is deployed on Heroku at https://envoy-guide.herokuapp.com/

There are three types of access
* Admin access
* Member access
* Visitor access

Admin status assigned users will have full access to the site which includes 
* Full access to all content for users
* Ability to set the status of an articles posted by general users to "pending", "approved", or "featured" or to delete the article completely
* Ability to approve products being posted by general users.  

Member access allows one to 
* View all web content including featured/approved product and articles
* Products can be viewed by all or product category.
* Create user profile
* Upload content (which requires approval by admin for others to view)
* Post products (which requires approval by admin for others to view)
* Create/Edit their profile as needed
* Comment on existing articles posted on the site. 

Visitor access allows one to <br>
* View all web content including featured/approved product and articles
* Products can be viewed by product or retailer category.
* Has the option to become a member by creating a general access profile. 

 
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br>
This repository is licensed under the MIT license.

## Demo

[Presentation](public/images/Envoy.pdf)



## Questions
Questions about this repository? Please contact us at [envoyproducts90@gmail.com](mailto:envoyproducts90@gmail.com). View more of our work in GitHub at [Envoy-Products](https://github.com/Envoy-products/Envoy-Products) 