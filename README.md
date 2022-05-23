# E_Commerce_ORM_EL
An overview of how to make your e-commerce website competitive with the e-commerce sites.

## Description
This application focuses on the backend of an ORM E-Commerce website. This E-Commerce site has categories, products and product tags. The categories and products include music, clothing, and whatever else you would like to add. As the store grows and/or changes directions, you are able to add, delete, or update any and all products. You can search for individual products or search for them all. Thank you for checking out the backend of this E-Commerce website.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Contact](#contact) 
  
## Installation
You will need to use the following packages: 

[MySQL2](https://www.npmjs.com/package/mysql2) packages to connect to a MySQL database for Models.

[Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for Models.

[express.js](https://www.npmjs.com/package/express) to handle the API for our Controllers.

[dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables.

## Usage
You first must install the required packages using "npm install". Then you must connect to MySQL in the command line by using "mysql -u root -p" and then entering your password. Once you are in the MySQL shell you need to creat the schema by using the database we created with "USE ecommerce_db;" and the exit the MySQL shell by using "exit;". You must seed the database with "npm run seed" and start the server with "npm run start". After you have you completed all these steps within the server.js terminal, you can then test all approriate route names in insomnia!

## License
This is project uses an MIT licensing.

## Credits

Edward Lopus

## Contact

Please contact me at tedlopus, for any further questions you have regarding this project.

Please visit https://github.com/tedlopus to see more of my projects!
