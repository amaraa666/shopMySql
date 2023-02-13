

const fs = require('fs');
const uuid = require('uuid');

const file = process.cwd() + '/data/users.json';

exports.getAll = (req, res) => {

    fs.readFile(file, 'utf-8', (readErr, data) => {
        const myData = JSON.parse(data)

        if (readErr) {
            return res.json({ status: false, message: readErr });
        }

        fs.writeFile(file, JSON.stringify(myData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            }

            return res.json({ status: true, result: myData });
        })
    })
};

exports.get = (req, res) => {

    const { id } = req.params;
    console.log(id)

    fs.readFile(file, 'utf-8', (readErr, data) => {

        const myData = JSON.parse(data)

        if (readErr) {
            return res.json({ status: false, message: readErr });
        }

        const filteredDta = myData.filter((dt) => {
            return dt.userID == id
        })

        console.log(filteredDta)

        return res.json({ status: true, result: filteredDta });

    })
};

exports.create = (req, res) => {
    const body = req.body

    fs.readFile(file, 'utf-8', (readErr, data) => {

        if (readErr) {
            return res.json({ status: false, message: readErr });
        }

        const myData = data ? JSON.parse(data) : []

        const Obj =
        {
            userID: uuid.v4(),
            details: {
                firstName: body.details.firstName,
                lastName: body.details.lastName,
                email: body.details.email,
                address: body.details.address,
                phoneNumber: body.details.phoneNumber,
                gen: body.details.male,
            },
            signIn: {
                userName: body.signIn.userName,
                password: body.signIn.password
            },
            admin: body.admin,
            order: body.order,
            favItem: body.favItem
        }

        myData.push(Obj);

        fs.writeFile(file, JSON.stringify(myData), (err) => {

            if (err) {
                return res.json({ status: false, message: err });
            }

            return res.json({ status: true, result: myData });

        });
    });
};

exports.delete = (req, res) => {
    const { id } = req.params;

    fs.readFile(file, 'utf-8', (readErr, data) => {
        const myData = JSON.parse(data)

        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const myDeletedData = myData.filter((el) => {
            return el.userID != id
        })

        fs.writeFile(file, JSON.stringify(myDeletedData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            }

            return res.json({ status: true, result: myDeletedData })
        })
    })
};

exports.uptade = (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    const body = req.body

    fs.readFile(file, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        }

        const myData = JSON.parse(data);


        console.log(body);
        myData.map((c) => {
            if (c.userID == id) {
                c.details.firstName = body.details.firstName,
                    c.details.lastName = body.details.lastName,
                    c.details.email = body.details.email,
                    c.details.address = body.details.address,
                    c.details.phoneNumber = body.details.phoneNumber,
                    c.details.gen = body.details.male,
                    c.signIn.userName = body.signIn.userName,
                    c.signIn.password = body.signIn.password,
                    c.admin = body.admin,
                    c.order = body.order,
                    c.favItem = body.favItem
            }
        });

        fs.writeFile(file, JSON.stringify(myData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            }

            return res.json({ status: true, result: myData });
        });
    });
};
