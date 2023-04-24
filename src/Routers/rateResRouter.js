const express = require('express');
const rateResRouter = express.Router();

const  { getRateRes, createRate, getRateResByUser, getRateResByRes } = require('../Controllers/rateResController');

rateResRouter.get('/get-rate-res', getRateRes);
rateResRouter.post('/create-rate', createRate);
rateResRouter.get('/get-rate-by-user/:user_id', getRateResByUser);
rateResRouter.get('/get-rate-by-res/:res_id',getRateResByRes);


module.exports = rateResRouter;
