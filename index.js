// import express from 'express';

// const app = express();

// app.listen(5000, () => console.log('Server running on port '));

import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import stylady from "./routes/stylady.js";
import products from "./routes/product.js";
import login from "./routes/login.js";

const app = express();

const url = "mongodb+srv://ahtisham:2030@cluster0.yhhi0kp.mongodb.net/";

// const connection =
mongoose
  .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("connected."));
//   .catch(console.log("error"));

app.listen(process.env.PORT || 5000);

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/stylady", stylady);
app.use("/product", products);
app.use("/login", login);

/*const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})*/
