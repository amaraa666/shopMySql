



const fs = require('fs');
const uuid = require('uuid');


const productService = require('../model/product_service.js');
const file = process.cwd() + "/data/product.json"


//images baih ystoi yu getAll deer

exports.getAll = async (req, res) => {

    const {limit} = req.query;
    console.log(limit)
    
    try{
        const result = await productService.getProducts(limit);
        if(result.length > 0){
            res.json({status: true , result});
        };
    }catch(err){
        res.json({status: false , message: err});
    };
};

exports.get = async (req, res) => {
    const { id } = req.params;


    if(!id) return res.json({status: false , message: 'product id not found'});

    try{
        const result = await productService.getProduct(id);
        const getImages = await productService.getProductImg(id);

        console.log(result);
        console.log(getImages);
    
        const newOb = { ...result };
        newOb.images = getImages;
        console.log(newOb)

        res.json({status: true , result: newOb});
    }catch(err){
        res.json({status: false , message: err});
    }
};

exports.update = async (req, res) => {
    const { id } = req.params;
console.log(id)
    if(!id) return res.json({status: false  , message: 'product id not found'})
    try{
        const result = await productService.updateProduct(id , req.body);
        if(result.length > 0 && result[0].affectedRows > 0){
            return res.json({status: true , message:'amjilttai shinchlegdlee' });
        }else{
            return res.json({status: false , messgae: 'aldaa'})
        }
    }catch(err){
        res.json({status: false , messsage: err});
    }
};

exports.create = async (req, res) => {
    const body = req.body;

    try{
        const rows = await productService.createProduct(body);
        const lastOne = await productService.getLastOne()
        console.log(lastOne , 'last');
        const createImg = await productService.createProImg(lastOne.product_id , images);

        if(result[0].affectedRows > 0){
            return res.json({status: true  , message: 'amjilttai nemegdlee'});
        };
    }catch(err){
        res.json({status: false , message: err});
    };
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    if(!id) return res.json({status: false , message: 'product id not found!!'});

    try{
        const result = await productService.deleteProduct(id);
    }catch(err){
        res.json({status: false , message: err});
    };
};