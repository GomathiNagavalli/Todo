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
