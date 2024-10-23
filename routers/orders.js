const express = require("express");
const router = express.Router();
const { Order } = require("../models/order");

router.get(`/`, async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

module.exports = router;