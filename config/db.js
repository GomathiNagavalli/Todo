const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database username
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Host (e.g., localhost)
    dialect: 'mysql',
    port:process.env.PORT
    // Use MySQL
  }
);
console.log('DB Config:', {
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
});


module.exports = sequelize;


// const { Sequelize } = require('sequelize');

// // Create a Sequelize instance
// const sequelize = new Sequelize(
//   process.env.DB_NAME, // Database name
//   process.env.DB_USER, // Database user
//   process.env.DB_PASSWORD, // Database password
//   {
//     host: process.env.DB_HOST, // Database host
//     dialect: 'mysql', // Use MySQL
//   }
// );

// module.exports = sequelize;






// # MYSQL_ADDON_HOST=bzojofbtnzahxv6nqfug-mysql.services.clever-cloud.com
// # MYSQL_ADDON_DB=bzojofbtnzahxv6nqfug
// # MYSQL_ADDON_USER=u4khb84aaoousr4b
// # MYSQL_ADDON_PORT=3306
// # MYSQL_ADDON_PASSWORD=FIy5F4HaChBeYcRMzks2
// # MYSQL_ADDON_URI=mysql://u4khb84aaoousr4b:FIy5F4HaChBeYcRMzks2@bzojofbtnzahxv6nqfug-mysql.services.clever-cloud.com:3306/bzojofbtnzahxv6nqfug


// # MYSQL_ADDON_HOST=bz2xjqyx9e3wtg9tvfvm-mysql.services.clever-cloud.com
// # MYSQL_ADDON_DB=bz2xjqyx9e3wtg9tvfvm
// # MYSQL_ADDON_USER=uaisbbhhuybjgl22
// # MYSQL_ADDON_PORT=3306
// # MYSQL_ADDON_PASSWORD=GMHxTo0XE1L1411YZwrY
// # MYSQL_ADDON_URI=mysql://uaisbbhhuybjgl22:GMHxTo0XE1L1411YZwrY@bz2xjqyx9e3wtg9tvfvm-mysql.services.clever-cloud.com:3306/bz2xjqyx9e3wtg9tvfvm