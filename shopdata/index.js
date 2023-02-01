


const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 6060;

const usersRouter = require("./routes/users.route.js")

app.use(express.json());
app.use(cors());

app.use('/api', usersRouter);

app.get('/api', (req, res) => {
    res.json({ message: "welcome rest api" });
});

app.listen(PORT, () => {
    console.log('server is running' + PORT);
})




