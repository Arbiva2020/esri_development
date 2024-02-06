const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'database_host',
  user: 'database_user',
  password: 'database_password',
  database: 'database_name',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Define your routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});