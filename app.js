const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const sequelize = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const Todo = require('./models/todoModel');
const cors = require("cors");






const app = express();


// Middleware
app.use(express.json());
app.use(cors());

// Test database connection and sync tables
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync(); // Creates the table if it doesn't exist
  })
  .catch((err) => console.log('Error: ' + err));


// Routes
app.use('/api/todos', todoRoutes);
// process.env.PORT ||

const PORT =  5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", async(req, res) => {
  res.status(200).send({message:"db running"})
});
