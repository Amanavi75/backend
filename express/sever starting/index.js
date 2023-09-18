// basic functionality to start the server 

const express = require("express"); /** required express for using it  */
const app=express()
console.dir(app) /* its a object having different object */
let port= 3000;
app.listen(port,()=> {
    console.log(`app listening on port ${port}`);
});
/** ports are the logical endpoints of a network connections that is used to exchange information between a web server and a web client  */

/** use cntrl+ c to stop the server  */

/** app.use : listen every type of request  */
/**app.use((req, res) =>{
    
    console.log("request recieved");
    res.send ({
        name:"aman",
        branch:"cse"
    });
    

});

/**to check ffor the request recieved or not just type the localhos://port and check the command propt  */

/**  Routing : it is a process of selecting apath for the traffic in a network or between or across multiple networks */

/** app.get(path, callback ) */
app.get("/",(req,res)=>{
    res.send("hello to the new path");
} );

app.get("/:username",(req,res)=>{
    console.log(req.params);
    res.send("you contacted to apple"); 
     /* path parameters
} )

app.post("/orange",(req,res)=>{    /** using app.post  */
    res.send("you contacted to orange");
} );
/** type localhost AND PORT/ path name and we will redirected to the path  */

 /** we can send some variable value to the path parameter along with response  */

 /**A synchronous API is one in which each operation must complete before the next operation can start */
 // a running server
 