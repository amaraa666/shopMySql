

const pool = require('../config/mysql-config.js');

exports.getProducts = async (limit) =>{
    try{
        if(limit){
            const [rows] = await pool.query(`select * from product limit ${limit}`);
            return rows;
        };
    }catch(err){
        console.log(err);
    };
};

exports.getProduct = async (id) =>{
    try{
        if(id){
            const [rows] = await pool.query(`select * from product where product_ic = ${id}`);
            return rows;
        };
    }catch(err){
        console.log(err);
    };
};

exports.createProduct = (product) =>{
    const {product_id ,  product_name , price , stock , pro_desc , category_id , img_id} = product;
    try{
        const [rows] = pool.query(
            'insert into product values(?,?,?,?,?,?,?)' , 
        [null , product_name , price , stock , pro_desc , category_id , img_id]);
        return rows;
    }catch(err){
        console.log(err);
    };
};

exports.deleteProduct = (id) =>{
    try{
        if(id){
            const result = pool.query(`delete from product where product_id = ${id}`);
            return result;
        };
    }catch(err){
        console.log(err);
    };
};
