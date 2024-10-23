const express = require("express");
const router = express.Router();
const {Product} = require("../models/product");

router.get(`/`,  async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.post(`/`, (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock,
    });
    product.save().then((createdProduct) => {
        res.status(201).json(createdProduct);
    }).catch((err) => {
        res.status(500).json({message: 'error creating product', error: err});
    });
});

module.exports = router;