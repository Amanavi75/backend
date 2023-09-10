const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { send } = require("process");
const methodOverride = require("method-override"); // requiring method override method for patch and put 
 

const {v4:uuidv4}=require('uuid'); // requiring uuid for the random ids and we will be uisng the version 4

app.use(methodOverride("_method"));
 
app.use(express.urlencoded( {extended:true})); // parsing 

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views")); 

app.use(express.static(path.join(__dirname,"public")));

let posts = [
{  id:uuidv4(),
username : "apnacollege",
content :"i love coding "},
{id:uuidv4(),
username : "aman avi",
content :"hardwork is importamt to acieve success"},
{id:uuidv4(),
username : "Ravi ",
content :"i got selected for the IMA "} 
// we will not take this variable as const so that when ever there is some action performed over api some action should be taken on that api's database 

];
// data for the post  
app.get("/posts",(req,res) =>{
    res.render("index.ejs" ,{posts});
}); // check for the server is working or not
app.get("/posts/new",(req,res) =>{
    res.render("new.ejs") ;
});

// retriving the post using the id parameter
app.get("/posts/:id",(req,res) =>{
   let{id }= req.params;
   let post = posts.find((p) => id === p.id);
   console.log(id);
   res.render("show.ejs",{post});
});


app.post("/posts",(req,res) =>{
    let { username,content}=req.body;
    let id = uuidv4();
    posts.push({id,username, content});
    res.redirect("/posts");
    // // to connects all the pages we use redirect so that every routes works connectively
});
// function for creating the new post 


//patch request for updation
app.patch("/posts/:id", (req,res)=>{
    let {id}= req.params;
    let newcontent = req.body.content;
    let post = posts.find((p) => id === p.id);// for updation first of all we will find out the post 
    post.content  = newContent;
    console.log(post);
    res.redirect("/posts");
    // we  have to change the reseted or new assigned id for the attching it to the url so that we can send that data using hoscotch or postman for the updation 
   
})


// edit functionality for editing the quora post

app.get("/posts/:id/edit",(req,res) => {
    let {id}= req.params; // extracting the id 
    let post = posts.find((p) => id === p.id);// for updation first of all we will find out the post 
    res.render("edit.ejs",{post}); 

}) 

app.delete("/posts/:id", (req,res)=>{
    let {id}= req.params; // extracting the id 
     posts = posts.filter((p) => id !== p.id); // this will return all the post except that whose id is given and hence we will not able to see the that post 
     res.redirect("/posts");
})
app.listen(port, () =>{ 
    console.log("Listening to port : 8080");
}); // creating a server
 

 // to connects all the pages we use redirect so that every routes works connectively  
 
 // we use uuid for generating random id that is universally unique identifier

 // we will install it using npm i uuid

 // with the help oh html we can only send get and post request  we will use a package method override that will overcome this for [put and patch ] firstly  we have to install this 
 