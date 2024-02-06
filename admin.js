const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const router = express.Router();
const products =[];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    //res.send('<form action="/product" method="POST"><input type ="text" name="title"><button type="submit">Add product</button></form>');
});

router.post('/add-product', (req, res, next) => {
   products.push({title: req.body.title});
    res.redirect('/');
});


exports.routes = router;
exports.products =products;