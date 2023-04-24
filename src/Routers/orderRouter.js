const express = require('express');
const orderRouter = express.Router();
const  { getOrders,createOrder } = require('../Controllers/orderController')

orderRouter.get('/get-orders', getOrders);
orderRouter.post('/create-order', createOrder)

module.exports = orderRouter;

