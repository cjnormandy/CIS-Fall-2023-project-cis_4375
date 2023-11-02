const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
  host: 'testopenglass.cvr0psvcqanz.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: '#123Password',
  database: 'openglassmobilebar',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to Database Successfully!');
});

app.use(express.json());

const usersRoutes = require('./routes/users');
usersRoutes({ app, db });

const menuRoutes = require('./routes/menu');
menuRoutes({ app, db });

const inventoryRoutes = require('./routes/inventory');
inventoryRoutes({ app, db });

const invoiceRoutes = require('./routes/invoices');
invoiceRoutes({ app, db });

const supplierRoutes = require('./routes/suppliers');
supplierRoutes({ app, db });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

