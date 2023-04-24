const express = require('express');
const likeResRouter = require('./likeResRouter');
const rateResRouter = require('./rateResRouter');
const orderRouter = require('./orderRouter')
const rootRouter = express.Router();

rootRouter.use("/like-res", likeResRouter);
rootRouter.use("/rate-res", rateResRouter);
rootRouter.use("/order", orderRouter);


module.exports = rootRouter;