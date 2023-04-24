
const { Sequelize } = require('sequelize');
const { successCode, errorCode, failCode } = require('../ultils/response');
const Op = Sequelize.Op;

const initModel = require('../Models/init-models');
const sequelize = require('../Models/index');
const models = initModel(sequelize);

const getRateRes = async (req,res) => {
    try{
        let data =  await models.rate_res.findAll();
        successCode(res,"get success",data)
    }catch{
        errorCode(res,"lỗi BE")
    }
}

const getRateResByUser = async (req,res) => {
    try{
        let { user_id } = req.params;
        let data = await models.rate_res.findAll({
            include: {all: true},
            where: {
                user_id,
            }
        })
        successCode(res,"get success", data)
    }catch{
        errorCode(res, "lỗi BE")
    }
}

const getRateResByRes = async (req,res) => {
    try{
        let { res_id } = req.params;
        let data = await models.rate_res.findAll({
            include: {all: true},
            where: {
                res_id,
            }
        })
        successCode(res,"get success", data)
    }catch{
        errorCode(res, "lỗi BE")
    }
}

const createRate = async (req,res) => {
    try{
        let { user_id, res_id, amount } = req.body;
        console.log(user_id, res_id, amount)
        let newRate = {
            user_id,
            res_id,
            amount,
            date_rate: "2022-01-01 09:00:00"
        }
        console.log(newRate)
        await models.rate_res.create(newRate);
        successCode(res,"created success","");
    }catch{
        errorCode(res,"lỗi BE")
    }
}


module.exports = {
    getRateRes,
    createRate,
    getRateResByUser,
    getRateResByRes
}