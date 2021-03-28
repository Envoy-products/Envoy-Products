# Envoy
A Hub for members to post, rate, review and talk about environmentally friendly products!

## Table Of Content
* [Contributors](#contributors)
* [General Info](#general-info)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Demo](#demo)
* [Questions](#questions)

## Contributors
|Eric Normann|Samiul Hayder Choudhury|Benn Asabir|Nathan Chow|Shamim Imtiaz|
|:---:|:---:|:---:|:---:|:---:|
|![myImage](https://ca.slack-edge.com/T01EXTZCZ44-U01FFJX35EH-8853f39f557f-512)|![myImage](https://avatars.githubusercontent.com/u/3344833?s=460&u=46efd9bd90904237b452dbaefdb03a57156ef84b&v=4)|![myImage](https://ca.slack-edge.com/T01EXTZCZ44-U01FR9XTTN0-9995038c9f3b-512)|![myImage](https://ca.slack-edge.com/T01EXTZCZ44-U01FGC3DAN7-41377ad60b24-512)|![myImage](https://ca.slack-edge.com/T01EXTZCZ44-U01F9AY18T0-ad94549a1f86-512)|
|<a href="https://github.com/e-p-n" target="_blank">Eric's Github</a>| <a href="https://github.com/samiul1988"> Samiul's Github</a>|<a href="https://github.com/BennAsabir">Benn's Github</a>|<a href="https://github.com/nchow18">Nathan's Github</a>|<a href="https://github.com/shamimimtiaz">Shamimim's Github|""|


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

There are three types of access:
* **Visitor access**
* **Member access**
* **Administrator access**

**Visitor access** allows one to 
* View all web content including featured/approved product and articles
* Products can be viewed by category.
* Has the option to become a member by signing up. 

**Member access** allows one to do all a visitor can, plus:
* Post articles or products (which requires approval by admin for others to view)
* Edit or delete articles or products already posted
* Edit their profile as needed
* Comment on existing articles posted on the site. 

**Administrator access** allows one to do all a member can, plus:
* Ability to set the status of an article or product posted by a member to "pending", "approved", or "featured"
* Ability to edit or delete articles or products post be a member.  
 
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br>
This repository is licensed under the MIT license.

## Demo

[Presentation](public/images/Envoy.pdf)

## Questions
Questions about this repository? Please contact us at [envoyproducts90@gmail.com](mailto:envoyproducts90@gmail.com). View more of our work in GitHub at [Envoy-Products](https://github.com/Envoy-products/Envoy-Products) 