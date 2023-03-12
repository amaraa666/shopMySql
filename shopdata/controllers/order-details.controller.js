

const fs = require('fs');

const orderDetService = require('../model/order-detail-service.js');

exports.getAll = async () =>{
   const {limit} =  req.query;
   try{
       const result = await orderDetService.getOrders_det(limit);
       res.json({status: true , result});
   }catch(err){
       res.json({status: false , message: err});
   };
};

exports.get = async () =>{
   const {id} = req.params;
   if(!id) return res.json({status: false , message: 'order-det id not found!!'});
   try{
       const result = await orderDetService.getOrder_det(id);
       if(result.length>0){
           res.json({status: true , result});
       }
   }catch(err){
       res.json({status: false , message: err});
   };
};

exports.delete = async () =>{
   const {id} = req.params;
   if(!id) return res.json({status: false , message:'order-det id not found'});
   try{
       const result = await orderDetService.deleteOrder_det(id);
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
       const result = await orderDetService.createOrder_det(body);
       if(result.length > 0 && result[0].affectedRows > 0){
           res.json({status: true , message: 'amjilttai nemegdlee'});
       };
   }catch(err){
       res.json({status: false , message: err});
   };
};

exports.update = async () =>{
   const {id} = req.params;
   if(!id) return res.json({status: false , message: 'order-det id not found!'});
   try{
       const result = await orderDetService.updateOrder_det(id , req.body);
       if(result.length > 0 && result[0].affectedRows > 0){
           res.json({status: true , message: 'amjilttai shinchlegdlee'});
       };
   }catch(err){
       res.json({status: false , message: err});
   };
};