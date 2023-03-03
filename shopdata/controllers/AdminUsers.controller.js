
const fs = require('fs');
const uuid = require('uuid');

const file = process.cwd + '/data/adminUsers.json';



exports.getAll = (req, res) => {

    fs.readFile(file, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        };

        const myData = data ? JSON.parse(data) : [];

        fs.writeFile(file, JSON.stringify(myData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            }

            return res.json({ status: true, result: myData });
        });
    });

};

exports.get = (req, res) => {
    const { adminUserId } = req.body

    fs.readFile(file, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: fasle, message: readErr });
        };

        const myData = data ? JSON.parse(data) : [];

        const myFilteredData = myData.filter((el) => {
            if (el.adminUserId === adminUserId) {
                return el
            }
        })

        return res.json({ status: true, result: myFilteredData })
    });
};


exports.create = (req, res) => {
    const body = req.body;

    fs.readFile(file, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        }

        const myData = data ? JSON.parse(data) : [];

        const myObj = {
            adminUserId: uuid.v4(),
            userName: body.userName,
            age: body.age,
            img: body.img,
            email: body.email,
            password: body.password
        }

        myData.push(myObj);

        fs.writeFile(file, JSON.stringify(myData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            }

            return res.json({ status: true, result: myData });
        });
    });
};

exports.uptade = (req, res) => {
    const { id } = req.params;
    const { userName, age, img, email, password } = req.body;

    fs.readFile(file, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        };

        const myData = JSON.parse(data);

        myData.map((e) => {
            if (e.adminUserId == id) {
                e.userName = userName
                e.age = age
                e.img = img
                e.email = email
                e.password = password
            };
        });

        fs.writeFile(file, JSON.stringify(myData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            };

            return res.json({ status: true, result: myData });
        });
    });
};

exports.delete = (req, res) => {
    const { id } = req.params;

    fs.reeadFile(file, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        };

        const myData = JSON.parse(data);


        const myFilteredData = myData.filter((e) => {
            if (!e.adminUserId == id) {
                return e;
            };
        });

        fs.writeFile(file, JSON.stringify(myFilteredData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            };

            return res.json({ status: true, result: myFilteredData });
        });
    });
};
