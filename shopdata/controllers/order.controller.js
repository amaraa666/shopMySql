

 const fs = require('fs');

 const orderService = require('../model/order-service.js');

 exports.getAll = async () =>{
    const {limit} =  req.query;
    try{
        const result = await orderService.getOrders(limit);
        res.json({status: true , result});
    }catch(err){
        res.json({status: false , message: err});
    };
 };

 exports.get = async () =>{
    const {id} = req.params;
    if(!id) return res.json({status: false , message: 'order id not found!!'});
    try{
        const result = await orderService.getOrder(id);
        if(result.length>0){
            res.json({status: true , result});
        }
    }catch(err){
        res.json({status: false , message: err});
    };
 };

 exports.delete = async () =>{
    const {id} = req.params;
    if(!id) return res.json({status: false , message:'order id not found'});
    try{
        const result = await orderService.deleteOrder(id);
        if(result.length > 0 && result[0].affectedRows > 0 ){
            res.json({status: true , messsage: 'amjilttai ustgagdlaa'});
        };
    }catch(err){
        res.json({status: false , message: err});
    };
 };

 exports.create = async () =>{
    const body = req.body;
    try{
        const result = await orderService.createOrder(body);
        if(result.length > 0 && result[0].affectedRows > 0){
            res.json({status: true , message: 'amjilttai nemegdlee'});
        };
    }catch(err){
        res.json({status: false , message: err});
    };
 };

 exports.update = async () =>{
    const {id} = req.params;
    if(!id) return res.json({status: false , message: 'order id not found!'});
    try{
        const result = await orderService.updateOrder(id , req.body);
        if(result.length > 0 && result[0].affectedRows > 0){
            res.json({status: true , message: 'amjilttai shinchlegdlee'});
        };
    }catch(err){
        res.json({status: false , message: err});
    };
 };