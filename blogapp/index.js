// taking instance of express framework 
const express = require("express");
const app = express();

// loading the environment file configuration in process object 
require("dotenv").config(); // 
const PORT = process.env.PORT || 3500; // loading the port 

// middleware
app.use(express.json());

const blog = require("./routes/blog"); // importing the route

//mouting 
app.use("/api/v1",blog);

const connectWithDb = require("./config/database"); // importing the db
connectWithDb();

//startting the server
app.listen(PORT,()=>{
    console.log("app is running successfully ");
    });
     

 app.get('/', (req,res)=>{
     console.log("this is homepage baby");
        res.send("this is homepage baby");
    });