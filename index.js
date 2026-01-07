const express=require("express");

const {}=require ("./connect")

const urlRoute = require('./routes/url');
const { connectToMongoDB } = require("./connect");

const app=express();
const PORT=8001;

connectToMongoDB('mongodb://localhost:')

app.use("/url",urlRoute);

app.listen(PORT,()=> console.log('server started' ))
