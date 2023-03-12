
const pool = require('../config/mysql-config.js');

exports.getOrders = async (limit) =>{
    try{
        if(limit){
            const [rows] =await pool.query(`select * from orders limit ${limit}`);
            return rows;
        };
    }catch(err){
        console.log(err);
    };
};

exports.getOrder = async (id) =>{
    try{
        if(id){
            const [rows] = await pool.query(`select * from orders where order_id = ${id}`);
            return rows;
        };
    }catch(err){
        console.log(err);
    };
};

exports.deleteOrder = async (id) =>{
    try{
        if(id){
            const [rows] = await pool.query(`delete from orders where order_id = ${id}`);
            return rows;
        }
    }catch(err){
        console.log(err);
    };
};

exports.createOrder = async (order) =>{
    const {order_id , user_id , total , created_date} = order;
    try{
        const [rows] = pool.query(`insert into orders values(? ,? ,? ,? )` , 
        [null , user_id , total , null ]);

        return rows;
    }catch(err){
        console.log(err);
    };
};

exports.updateOrder = (id , updatedData) =>{
    let [result] = '';
    for(let i = 0 ; i < Object.keys(updatedData).length ; i++){
        result = pool.query(`update orders set ${Object.keys(updatedData)[i]} = '${Object.values(updatedData)[i]}' where order_id = ${id}`);
    };
    return result;
}