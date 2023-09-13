const {faker} = require('@faker-js/faker');

const mysql = require('mysql2');
// requiring mysql package

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true})); // this is used so that we will be able to pass our form data in the update and original database 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'delta_app',
    password:'Amanavi12@@'
});

let getRandomUser = () => {
    return [
     faker.datatype.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
 }
 

// insert data - we will use placeholder for storing data that is question mark 
// single question for multiple insertion;
let q = "INSERT INTO user (id,username,email,password )VALUES ?";

/*let users = [["123p","newuserp","abc@gmail.comm","abce"],
["1234","newusert","abct@gmail.com","abcd"]]; */

// used for adding the data 

/*let data = [];
for (let i =1;i<=100;i++){
    data.push(getRandomUser());
}*/ 


//ccreating connection for sql and app 
  /*try{
    connection.query(q,[data],(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
  } catch(err){
    console.log(err);
  } 
   */
// connection.query is used to run the particular query for the database 
 
// for counting the no. of user  or home route 
app.get("/",(req,res)=>{
    let q = `SELECT COUNT(*) FROM USER`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let Count = result[0]["count(*)"];
            res.render("home.ejs",{Count});
        });
      } catch(err){
        console.log(err);
        res.send("some error in db");
      } 
});

// show route , to get the data on html page 
app.get("/user", (req,res) =>{
   let q = `SELECT * FROM USER`;
   try{
    connection.query(q,(err,users)=>{
        if(err) throw err;
        
        res.render("showusers.ejs",{ users});
    });
  } catch(err){
    console.log(err);
    res.send("some error in db");
  } 
})

//edit route 
app.get("/user/:id/edit",(req,res)=>{
  let { id }=req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.render("edit.ejs");  
    });
  } catch(err){
    console.log(err);
    res.send("some error in db");
  } 
});

//update route 
app.patch("/user/:id",(req,res)=>{
  res.send("updated");
})
app.listen("8000",()=>{
    console.log("server is listening to port 8000");
});




