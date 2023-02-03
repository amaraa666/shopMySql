

const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 6060;

app.use(cors());
app.use(express.json());

const file = './data/users.json';

app.get('/users' , (req , res)=>{
    
    fs.readFile(file , ' utf-8' , (readErr , data)=>{
        const myData = data ? JSON.parse(data) : res.json({status: false , message: readErr});

        if(readErr){
            res.json({status: false , message: readErr});
        }

        fs.writeFile(file , JSON.stringify(myData) , (err)=>{
            if(err){
                res.json({status: false , message: err});
            }
            
            res.json({status: true , result: myData});
        })
    })
})

app.post('/user' , (req , res)=>{
    
    fs.readFile(file  , 'utf-8' ,(readErr  ,data)=>{

        const myData = data ? JSON.parse(data) : res.json({status: false , message: readErr})

        if(readErr){
            res.json({status: false  , message: readErr});
        }

        const Obj = {
                userID: 2,
                details:{
                    firstName: 'Amraa',
                    lastName: 'Munkh',
                    email: 'ami@gmai;.com',
                    address: 'Iveel hothon',
                    phoneNumber: '70118818',
                    gen: 'male',
                },
                signIn: {
                    userName: 'Amaraa',
                    password: 'amaraa123'
                },
                admin: true,
                order: [],
                favItem: []
            }


        myData.push(body);


        fs.writeFile(file , JSON.stringify(myData) , (err)=>{
            if(err){
                res.json({status: false , message: err});
            }
    
            res.json({status: true , result: myData})
        });
    });
});

app.delete('/user' , (req , res )=>{
    const {id} = req.query;

    console.log(id)


    fs.readFile(file , 'utf-8' , (readErr , data)=>{
        const myData = data ? JSON.parse(data) : res.json({status: false , message: readErr});

        const myDeletedData = myData.filter((el)=>{
            return el.userID != id 
        })

        fs.writeFile(file , JSON.stringify(myDeletedData) , (err)=>{
            if(err){
                res.json({status: false , message: err});
            }

            res.json({status: true , result: myDeletedData})
        })
    })
});



app.put('/user' , (req , res)=>{
    const { id } = req.query;

    fs.readFile(file , 'utf-8' , (readErr , data)=>{
        const myData = data ? JSON.parse(data) : res.json({status: false , message: readErr});
        console.log(myData);

        const myEditedData = myData.filter((c)=>{
            if(c.userID == id){
                return c.signIn.password  = "huurhun huuhduud"
            }
            return myData
        })

        fs.writeFile(file ,JSON.stringify(myEditedData) , (err)=>{
            if(err){
                res.json({status: false , message: err});
            }


            res.json({status: true , result: myEditedData})
        })
    })
})

app.listen(PORT , ()=>{
    console.log('server is running '+ PORT);
})