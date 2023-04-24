
const { Sequelize } = require('sequelize');
const { successCode, errorCode, failCode } = require('../ultils/response');
const Op = Sequelize.Op;

const initModel = require('../Models/init-models');
const sequelize = require('../Models/index');
const models = initModel(sequelize);

const getLikeRes = async (req,res) => {
    try{
        let data = await models.like_res.findAll();
        
        successCode(res, "Get success", data)
    }catch{
        errorCode(res,"lỗi BE")
    }
};


const getLikeResByUserId = async (req,res) => {
    try{
        let { user_id} = req.params
        let data = await models.like_res.findAll({
            where:{
                user_id,
            },
            include: {all: true},
           
        });
        
        successCode(res, "Get success", data)
    }catch{
        errorCode(res,"lỗi BE")
    }
};

const getLikeResByResId = async (req,res) => {
    try{
        let { res_id} = req.params
        let data = await models.like_res.findAll({
            where:{
                res_id,
            },
            include: {all: true},
           
        });
        
        successCode(res, "Get success", data)
    }catch{
        errorCode(res,"lỗi BE")
    }
};


const likeRes = async (req,res) => {
    try{
        let { user_id, res_id } = req.body;
        console.log(req.body)
        let newLike = {
            user_id,
            res_id,
            date_like : "2022-01-01 09:00:00"
        }

        await models.like_res.create(newLike);
        successCode(res,"Liked","");
    }catch{
        errorCode(res,"lỗi BE")
    }
};

const unLikeRes = async (req,res) => {
    try{
        let { user_id, res_id } = req.params;
        console.log(user_id,res_id)
        await models.like_res.destroy({
            
            where: {
                user_id,
                res_id
            }
        })
        successCode(res,"Delete","");
    }catch{
        errorCode(res,"lỗi BE")
    }
};


module.exports = {
    getLikeRes,
    getLikeResByUserId,
    getLikeResByResId,
    likeRes,
    unLikeRes,
};