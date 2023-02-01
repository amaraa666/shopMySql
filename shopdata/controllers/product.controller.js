



const fs = require('fs');
const uuid = require('uuid');

const file = process.cwd() + "/data/product.json"

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
            if (el.productId == id) {
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
            if (el.productId = id) {
                el.productId = body.cateId
                el.productName = body.cateName
                el.category =body.category
                el.price = body.price
                el.desc = body.desc
                el.sale = body.sale
                el.isTrending = body.price
                el.imgs.coverImg = body.imgs.coverImg
                el.imgs.thumbnail = body.imgs.thumbnail
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
            productId: body.cateId,
            productName: body.cateName,
            category: body.category,
            price: body.price,
            desc: body.desc,
            sale: body.sale,
            isTrending: body.price,
            imgs:{
                coverImg: body.imgs.coverImg,
                thumbnail: body.imgs.thumbnail
            }
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

        const myFilteredData = myData.filter((el) => elproductId !== id)

        fs.writeFile(file, JSON.stringify(myFilteredData), (err) => {
            if (err) {
                return Rss.json({ status: false, message: err });
            };

            return res.json({ status: true, result: myFilteredData });
        });
    });
};