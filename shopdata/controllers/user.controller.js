

const fs = require('fs');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 3;
const myKey = "123456^^!'_'"


const userService = require('../model/user-service.js');
const file = process.cwd() + '/data/users.json';

exports.getAll = async (req, res) => {
    const { limit } = req.query;

    try {
        const result = await userService.getUsers(limit);
        console.log(result)
        if (result.length > 0) {
            res.json({ status: true, result });
        }
    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.get = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.json({ status: false, message: 'user nor found!' });

    try {
        const result = await userService.getUser(id);
        console.log(result)
        if (result) {
            res.json({ status: true, result });
        }; // adilhn nertei baival dahij bicih hereggui;

    } catch (err) {
        res.json({ status: false, message: err });
    };
};

exports.create = async (req, res) => {
    const body = req.body;
    console.log(body);

    try {
        const result = await userService.createUser(body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.json({ status: false, message: 'user notfound!s' });

    try {
        const result = await userService.deleteUser(id);
        if (result[0].affectedRows > 0) {
            res.json({ status: true, message: 'amjilttai ustgallaa' });
        };
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.update = async (req , res) => {
    const { id } = req.params;
    console.log(id)
    const {user_id , user_name , last_name , first_name , user_pass , gender , address ,birth_date , is_admin} = req.body;
    
    if (!id) return res.json({ status: false, message: 'user not found' });
    try {
        const result = await userService.updateUser(id , req.body);
        if(result.length>0 && result[0].affectedRows > 0) {
            return res.json({ status: true, message: 'amjilttai shinechlegdlee' })
        }else{
            return res.json({ status: false, message: 'amjiltgui ' })
        }
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

exports.login = (req, res) => {
    const { signIn } = req.body;

    if (!signIn.userName || !signIn.password)
        return res.json({ status: false, message: 'Medeelel dutuu baina' });


    fs.readFile(file, 'utf-8', async (readErr, data) => {
        if (readErr) {
            return ({ status: false, message: readErr });
        }

        const myData = data ? JSON.parse(data) : [];

        let user;
        for (let i = 0; i < myData.length; i++) {
            if (signIn.userName == myData[i].signIn.userName) {
                const decrypt = await bcrypt.compare(signIn.password + myKey, myData[i].signIn.password);
                console.log("suu", await bcrypt.compare(signIn.password + myKey, myData[i]?.signIn.password))
                console.log(decrypt);
                if (decrypt) {
                    user = {
                        userID: myData[i].userID,
                        email: myData[i].details.email,
                        lastName: myData[i].details.lastName,
                        firstName: myData[i].details.firstName
                    };
                    break;
                };
            };
        };
        console.log(user);
        if (user) {
            return res.json({ status: true, result: user })
        } else {
            return res.json({ status: false, message: 'Tanii ner esvel nuuts ug buruu baina' })
        }
    });
};
