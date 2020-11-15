const express = require('express');

const app = express();
const router = express.Router();

router.use('/products', (req, res, next) => {
  res.json({name: "Herman", email: "hermanxphp@gmail.com"});
  next();
})

router.use('/price', (req, res, next) => {
  res.json({price: 1500000});
  next();
})

router.delete('/customers', (req, res, next) => {
  res.json({title: "Customer"});
  next();
})
app.use('/', router);

app.listen(8080);
console.log("Running on localhost:8080");