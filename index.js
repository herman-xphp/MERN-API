const express = require('express');

const app = express();
const productRoutes = require('./src/routes/products');

app.use('/', productRoutes);

app.listen(8080);
console.log("Running on localhost:8080");