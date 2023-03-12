
const pool = require('../config/mysql-config.js');

exports.getOrders_det = async (limit) =>{
    try{
        if(limit){
            const [rows] =await pool.query(`select * from order_details limit ${limit}`);
            return rows;
        };
    }catch(err){
        console.log(err);
    };
};

exports.getOrder_det = async (id) =>{
    try{
        if(id){
            const [rows] = await pool.query(`select * from order_details where order_det_id = ${id}`);
            return rows;
        };
    }catch(err){
        console.log(err);
    };
};

exports.deleteOrder_det = async (id) =>{
    try{
        if(id){
            const [rows] = await pool.query(`delete from order_details where order_det_id = ${id}`);
            return rows;
        }
    }catch(err){
        console.log(err);
    };
};

exports.createOrder_det = async (order_det) =>{
    const {order_det_id , order_id , product_id , quantity} = order_det;
    try{
        const [rows] = pool.query(`insert into order_details values(? ,? ,? ,? )` , 
        [null , order_id , product_id , quantity]);

        return rows;
    }catch(err){
        console.log(err);
    };
};

exports.updateOrder_det = (id , updatedData) =>{
    let [result] = '';
    for(let i = 0 ; i < Object.keys(updatedData).length ; i++){
        result = pool.query(`update order_details set ${Object.keys(updatedData)[i]} = '${Object.values(updatedData)[i]}' where order_det_id = ${id}`);
    };
    return result;
}