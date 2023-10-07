const express= require("express");
const app = express();
const ExpressError = require("./expresserror");


const checkToken = (req,res,next)=>{
    let{ token} = req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new ExpressError (401,"accessdenied")
}

//* 1st middleware 
app.use((req,res)=>{
    console.log("hi i am middleware");
    res.send("middleware finished");
});

//* now when we go to the localhost the loader is running but we are unable to load the page because the middleware has already sended the respose and it will not forward the request 
app.get("/",(req,res)=>{
    res.send("hi i am root");
})

// * middleware for checking the query string for the accessing the data part 
app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token==="give access"){
        next();
    }
    res.send("accesss denied ");

});

//* api token as query string 
app.get("/api", (req,res)=>{
    res.send("data");

})

app.get("/random",(req,res)=>{
    res.send("this is a random page");
})



app.listen(9000, ()=>{
    console.log("server is listening to 9000");
});
