import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const app = express();


app.use(express());

app.get('/',function(req,res){
    
})

app.post('/api/v1/signup', function(req,res){
    })

app.post('/api/v1/signin', function(req,res){
    })

app.post('/api/v1/content', function(req,res){
    
})

app.get('/api/v1/content', function(req,res){
    
})

app.delete('/api/v1/content', function(req,res){
    
})

app.listen('4000', ()=>{
    console.log("Port Started on 4000!")
})
