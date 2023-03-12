

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
            const [rows] = await pool.query(`select * from product where product_id = ${id}`);
            return rows;
        };
    }catch(err){
        console.log(err);
    };
};

exports.getLastOne = async ()=>{
    try{
        const [rows] = await pool.query(`select * from product order by product_id DESC limit 1`);
        return rows[0];
    }catch(err){
        console.log(err);
    };
}

exports.createProduct = async (product) =>{
    const {product_id ,  product_name , price , stock , pro_desc , category_id , img_id} = product;
    try{
        const [rows] = await pool.query(
            'insert into product values(?,?,?,?,?,?,?)' , 
        [null , product_name , price , stock , pro_desc , category_id , img_id]);
        return rows;
    }catch(err){
        console.log(err);
    };
};

exports.createProImg = async (productId  , imgs) =>{
     for(let i = 0 ; i< imgs.length ; i++){
        const result = await pool.query(`insert into product_img values(? ,? ,? ,?)` ,
        [null , productId, imgs[i] , null ]
         );
         console.log(result);
     };
     return success;
};


//
exports.getProductImg = async (productId) =>{
    try {
        const [rows] = await pool.query(
        `SELECT * FROM product_img where product_id = ${productId}`
        );
        console.log(rows);
        return rows;
    } catch (err) {
        console.log(err);
    };
};

exports.deleteProduct = async (id) =>{
    try{
        if(id){
            const result = await pool.query(`delete from product where product_id = ${id}`);
            return result;
        };
    }catch(err){
        console.log(err);
    };
};


exports.updateProduct =  async (id , updatedData) =>{
    let [result] = '';

    for(let i = 0 ; i < Object.keys(updatedData).length  ; i++){
        result = await pool.query(`
        update product set ${Object.keys(updatedData)[i]} = '${Object.values(updatedData)[i]}' where product_id = ${id}
        `);
    };
    return result;
}