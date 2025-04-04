import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";


const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/MindCache");

const JWT_PASSWORD = "007007";

app.get('/',function(req,res){
    
})

app.post('/api/v1/signup', async function(req,res){

    // TODO: zod validation cheyaledu, hash the password cheyali

    const username = req.body.username;
    const password = req.body.password;

    try{
        await UserModel.create({
            username: username,
            password: password,
        })
        
        res.json({
            message:"User Signed up"
        })
    } catch(e){
        res.status(411).json({
            message: "User already exists"
        })
    }
})

app.post('/api/v1/signin', async function(req,res){

    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser){ //If there is an already existing user sign the jwt and return it to the User.
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)
        res.json({
            token
        })
    } else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
 })

app.post('/api/v1/content', function(req,res){
    const title = req.body.title;
    const link = req.body.link;
    const tags = req.body.tags;
})

app.get('/api/v1/content', function(req,res){
    
})

app.delete('/api/v1/content', function(req,res){
    
})

app.listen(3002, ()=>{
    console.log("Port Started on 3002")
})

