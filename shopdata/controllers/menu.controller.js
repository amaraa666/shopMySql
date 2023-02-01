

const fs = require('fs');
const uuid = require('uuid');

const myfile = process.cwd() + "/data/menu.json";

exports.getAll = (req, res) => {
    fs.readFile(myfile, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ statuts: false, message: readErr });
        }

        const myData = JSON.parse(data);

        fs.writeFile(myfile, JSON.stringify(myData), (err) => {

            if (err) {
                return res.json({ status: false, message: err });
            }

            return res.json({ status: true, result: myData });

        });
    });
};

exports.get = (req, res) => {
    const { id } = req.params;

    fs.readFile(myfile, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        };

        const myData = JSON.parse(data);

        const myfilteredDta = myData.filter((el) => {
            if (el.id == id) {
                return el
            };
        });

        return res.json({ status: true, result: myfilteredDta });
    });
};

exports.uptade = (req, res) => {
    const body = req.body;
    const { id } = req.params;

    fs.readFile(myfile, 'utf-8', (readErr, data) => {
        if (readErr) {
            return ({ status: false, message: readErr });
        };

        const myData = JSON.parse(data);

        myData.map((el) => {
            if (el.id == id) {
                el.id = body.id
                el.menuName = body.menuName
                el.link = body.link
            };

            fs.writeFile(myfile, JSON.stringify(myData), (err) => {
                if (err) {
                    return res.json({ status: false, message: err });
                };

                return res.json({ status: true, result: myData });
            });

        });

    });
};

exports.create = (req, res) => {
    const body = req.body;

    fs.readFile(myfile, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        };

        const myData = JSON.parse(data);

        const myObj = {
            id: uuid.v4(),
            menuName: body.menuName,
            link: body.link,
        }

        myData.push(myObj)

        fs.writeFile(myfile, JSON.stringify(myData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            };

            return res.json({ status: false, result: myData });
        });
    });
};

exports.dalete = (req, res) => {
    const { id } = req.params;

    fs.readFile(myfile, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        };

        const myData = JSON.parse(data);

        const myFilteredData = myData.filter((e) => e.id !== id);

        fs.writeFile(myfile, JSON.stringify(myFilteredData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            };

            return res.json({ status: true, result: myFilteredData });
        });
    });
};