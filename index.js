const nameDes = "pwani teknogirls";
console.log(nameDes);

const axios = require ('axios');

// Url
const url = "https://jsonplaceholder.typicode.com/todos/1"

// method   - GET
async function getTodos(){
   const response = await axios.get(url)
   console.log(response.data.title);
}

getTodos();

const express = require("express");
const app = express();
const port = 1234;

app.get("/",async(req,res)=>{

    try{
        const response = await axios.get(url);
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <p>${response.data.title}</p>
        </body>
        </html>`);
    }catch (err){
        console.log("Error handling data",err);
        res.status(500).send("An error occurred");
    }
 
});

app.get("/joke",(req,res)=>{
    res.send(joke);
})

app.use(express.json());

app.post("/joke",(req,res) =>{
    // joke
    const joke = req.body.joke;
    if(!joke){
        return res.status(400).json({
            message:"provide a joke"
        });
    }
    return res.status(200).json({
        message:"successfull"
    })

});

app.listen(port,()=>{
    console.log("all is well");
})


 // Add this line before defining your routes

// 
// header
// body
