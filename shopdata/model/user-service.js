
const pool = require('../config/mysql-config');

exports.getUsers = async (limit) => {
    try {
        if (limit) {
            const [rows] = await pool.query(`select * from user limit ${limit}`);
            return rows;
        };
    } catch (err) {
        console.log(err);
    };
};


// export gedeg exports gedeg what's the difference between
//pool.query console doj harah
// try catch nuu vee?

exports.getUser = async (id) => {
    try {
        const [rows] = await pool.query(`select * from user where user_id = ${id}`);
        return rows[0]; // why zgr rowoo yvuulj boloogui be
    } catch (err) {
        console.log(err);
    };
};

exports.createUser = async (user) => {
    const { user_id, user_name, first_name, last_name, user_pass, gender, address, birth_date, user_img, is_admin } = user;
    try {
        const [rows] = await pool.query(
            `insert  into user values( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [user_id, user_name, first_name, last_name, user_pass, gender, address, birth_date, user_img, is_admin]);
        return rows;
    } catch (err) {
        console.log(err);
    };
};

exports.deleteUser = async (id) => {
    try {
        const result = pool.query(
            `delete from user where user_id = ${id}`);
        return result;
    } catch (err) {
        console.log(err);
    };
};


exports.updateUser = async (id, updatedData) => {
    console.log(updatedData);
    let [result] = '';
    for (let i = 0; i < Object.keys(updatedData).length; i++) {
        result = await pool.query(
            `update user SET ${Object.keys(updatedData)[i]} = '${Object.values(updatedData)[i]}' where user_id = ${id}`
        );
    };
    return result;
};