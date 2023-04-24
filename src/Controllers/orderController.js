const { Sequelize } = require('sequelize');
const { successCode, errorCode, failCode } = require('../ultils/response');
const Op = Sequelize.Op;

const initModel = require('../Models/init-models');
const sequelize = require('../Models/index');
const models = initModel(sequelize);

const getOrders = async (req,res) => {
    try{
        let data = await models.order.findAll({})
        successCode(res,"get success", data);
    }catch{
        errorCode(res,'Lỗi BE')
    }
}

const createOrder = async (req,res) => {
    try{
        let { user_id, food_id, amount, code, arr_sub_id } = req.body;
        let newOrder = {
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id
        }
        console.log(newOrder)
        await models.order.create(newOrder);
        successCode(res,"create success", "");
    }catch{ 
        errorCode(res,'Lỗi BE')
    }
}

module.exports = {
    getOrders,
    createOrder
}