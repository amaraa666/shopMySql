

const fs = require('fs');
const uuid = require('uuid');

const file = process.cwd() + "/data/category.json"

exports.getAll = (req, res) => {
    fs.readFile(file, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        }

        const myData = JSON.parse(data);

        fs.writeFile(file, JSON.stringify(myData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            };

            return res.json({ status: true, result: myData });

        });
    });
};

exports.get = (req, res) => {
    const { id } = req.params;
    const body = req.body

    fs.readFile(file, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        };

        const myData = JSON.parse(data);

        const myFilteredData = myData.map((el) => {
            if (el.cateId == id) {
                return el
            }
        });

        return res.json({ status: true, result: myFilteredData });

    });
};

exports.uptade = (req, res) => {
    const { id } = req.params;
    const body = req.body;

    fs.readFile(file, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        };

        const myData = JSON.parse(data);

        myData.map((el) => {
            if (el.cateId = id) {
                el.cateId = body.cateId
                el.cateName = body.cateName
                el.cateLink = body.cateLink
            }
        });

        fs.writeFile(file, JSON.stringify(myData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            };

            return ({ stautus: true, result: myData });
        });
    });
};

exports.create = (req, res) => {
    const body = req.body;

    fs.readFile(file, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        };

        const myData = JSON.parse(data);

        const myObj = {
            cateName: body.cateName,
            cateLink: body.cateLink,
            cateId: uuid.v4()
        };

        myData.push(myObj);

        fs.writeFile(file, JSON.stringify(myData), (err) => {
            if (err) {
                return res.json({ status: false, message: err });
            };

            return res.json({ status: true, result: myData })
        });
    });
};

exports.delete = (req, res) => {
    const { id } = req.params;

    fs.readFile(file, 'utf-8', (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr });
        };

        const myData = JSON.parse(data);

        const myFilteredData = myData.filter((el) => el.cateId !== id)

        fs.writeFile(file, JSON.stringify(myFilteredData), (err) => {
            if (err) {
                return Rss.json({ status: false, message: err });
            };

            return res.json({ status: true, result: myFilteredData });
        });
    });
};