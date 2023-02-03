



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

        const myFilteredData = myData.filter((el) => {
            if (el.productId == id) {
                return el
            }
        });
        console.log(myFilteredData)

        return res.json({ status: true, result: myFilteredData });

    });
};

exports.uptade = (req , res) =>{
    const {id} = req.params;
    const body = req.body;

    fs.readFile(file , 'utf-8' , (readErr , data)=>{

        if(readErr){
            return res.json({status: false , message: readErr});
        }

        const Mydata = JSON.parse(data);

        Mydata.map((el)=>{
            if(el.productId == id){
                el.productName = body.productName
                el.category = body.category
                el.price = body.price
                el.desc = body.desc
                el.sale = body.sale
                el.isTrending = body.isTrending
                el.quantity = body.quantity
                // el.imgs.coverImg = body.imgs.coverImg
                // el.imgs.thumbnail = body.imgs.thumbnail                
            };
        });

        fs.writeFile(file , JSON.stringify(Mydata) , (err)=>{

            if(err){
                return res.json({status: false , message: err});
            }

            return res.json({status: true , result: Mydata})
        })
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
            productId: uuid.v4(),
            productName: body.productName,
            category: body.category,
            price: body.price,
            desc: body.desc,
            sale: body.sale,
            isTrending: body.price,
            quantity: body.quantity,
            imgs: {
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

        const myFilteredData = myData.filter((el) => el.productId !== id)

        fs.writeFile(file, JSON.stringify(myFilteredData), (err) => {
            if (err) {
                return Rss.json({ status: false, message: err });
            };

            return res.json({ status: true, result: myFilteredData });
        });
    });
};