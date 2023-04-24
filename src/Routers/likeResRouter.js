const express = require('express');
const likeResRouter = express.Router();

const { getLikeRes,likeRes,unLikeRes,getLikeResByUserId,getLikeResByResId } = require('../Controllers/likeResController');

likeResRouter.get("/get-like-res", getLikeRes);
likeResRouter.get("/get-like-res-by-user/:user_id", getLikeResByUserId);

likeResRouter.get("/get-like-res-by-res/:res_id", getLikeResByResId);
likeResRouter.post("/create-res", likeRes);
likeResRouter.delete("/unlike-res/:user_id/:res_id", unLikeRes);

module.exports = likeResRouter;