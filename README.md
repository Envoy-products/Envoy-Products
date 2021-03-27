# Envoy-Product
A Hub for memebers to post, rate, review and talk about environmentally friendly products!

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
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Express](https://www.npmjs.com/package/express)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Flickity](https://www.npmjs.com/package/flickity)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [jquery-bar-rating](https://www.npmjs.com/package/jquery-bar-rating)
* [typed.js](https://www.npmjs.com/package/typed.js)

## Installation
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
Use database
```terminal
envoy_db
```
Then quit MySQL shell and input the following in your terminal to start running application
```terminal
npm start
```
Once all that is done, navigate to - http://localhost:3001 to begin!


## Usage
This application is deployed on Heroku at https://envoy-guide.herokuapp.com/
<br>
There are three types of access
	<br>
	*Admin access
	<br>
	*General access
	<br>
	*Visitor access
<br>
Admin status assigned users will have full access to the site which includes <br>
	-Full access to all content for users
	<br>
	-Ability to approve articles posted by general users
	<br>
	-Ability to approve products being posted by general users.  
<br>
General access allows one to <br>
	-View all web content including featured/approved product and articles
	<br>
	-Products can be viewed by all or product category.
	<br>
	-Create user profile
	<br>
	-Upload content (which requires approval by admin for others to view)
	<br>
	-Post products (which requires approval by admin for others to view)
	<br>
	-Create/Edit their profile as needed
	<br>
	-Comment on existing articles posted on the site. 

<br>
Visitor access allows one to <br>
	-View all web content including featured/approved product and articles
	<br>
	-Products can be viewed by product or retailer category.
	<br>
	-Has the option to become a member by creating a general access profile. 

 
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br>
This repository is licensed under the MIT license.

## Demo

Presentation:
[Envoy-products-presentation (2).pdf](https://github.com/shamimimtiaz/my-e-commerce/files/6216172/Envoy-products-presentation.2.pdf)



## Questions
Questions about this repository? Please contact us at [envoyproducts90@gmail.com](mailto:envoyproducts90@gmail.com). View more of our work in GitHub at [Envoy-Products](https://github.com/Envoy-products/Envoy-Products) 