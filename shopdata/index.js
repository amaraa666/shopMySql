


const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 6060;

const usersRouter = require("./routes/users.route.js");
const productsRouter = require('./routes/product.route.js');
const menusRouter = require('./routes/menu.route.js');
const categoriesRouter = require('./routes/category.route.js')
const adminRouter = require('./routes/adminUsers.js')

app.use(express.json());
app.use(cors());

app.use('/api', usersRouter);
app.use('/api', productsRouter);
app.use('/api', menusRouter);
app.use('/api', categoriesRouter);
app.use('/api', adminRouter);

app.get('/api', (req, res) => {
    res.json({ message: "welcome rest api" });
});

app.listen(PORT, () => {
    console.log('server is running' + PORT);
});




