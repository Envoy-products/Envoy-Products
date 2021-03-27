# Envoy-Product
A Hub for memebers to post, rate, review and talk about environmentally friendly products!

## Table Of Content
* [General Info](#general-info)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
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
and 
```terminal
use envoy_db
```
Then quit MySQL shell and input the following in your terminal to start running application
```terminal
npm start
```
Once all that is done, navigate to - http://localhost:3001 to begin!


## Usage
This application is by memebers and non-memebers to post, review and talk about different environmentally friendly products and blogs. 

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br>
This repository is licensed under the MIT license.

## Questions
Questions about this repository? Please contact us at [envoyproducts90@gmail.com](mailto:envoyproducts90@gmail.com). View more of our work in GitHub at [Envoy-Products](https://github.com/Envoy-products/Envoy-Products) 