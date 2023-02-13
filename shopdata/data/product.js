


const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 7070;

app.use(cors());
app.use(express.json());


app.get('/product' , (req , res)=>{
    

})