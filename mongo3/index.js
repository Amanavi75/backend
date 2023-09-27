

// basic set up for connecting the mongoose database to server and starting the server 
const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const path = require("path");

// requiring the chat model and chat schema to create new chat 
const Chat = require("./models/chat.js");
// requiring  method override package 
const methodOverride = require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public"))); //used to serve the static files from the public folder 
app.use(express.urlencoded({extended:true})); // used for parsing 

app.use(methodOverride("_method"));
main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// creating a new chat in database 
/*let chat1 = new Chat({
    from:"anil",
    to:"jyotika chakroborty",
    msg:"send me your exam sheet",
    created_at:new Date()
});*/

/*  chat1.save().then(res=>{console.log(res); 
}); */

// * index route ; showing all chats 
app.get("/chats",async (req,res)=>{
    let chats= await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});
// and  after that we will send that data to client 

// *new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

// *create route 
app.post("/chats",(req,res)=>{
    let {from, to, msg}= req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat.save().then(res=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
});

//* edit route 
app.get("/chats/:id/edit", async (req,res)=>{
    let {id}= req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

//* update rote 
// for updation of post 
app.put("/chats/:id",async (req,res)=>{
    let {id} = req.params;  // extracting the id 
    let { msg: newMsg} = req.body; // extracting the msg 

    let updatedChat = await Chat.findByIdAndUpdate(id, {msg:newMsg}, {runValidators:true, new:true});

    console.log(updatedChat);
    res.redirect("/chats"); //redirect to chats 
});

//* delete route or destroy route 
app.delete("/chats/:id", async (req,res)=>{
    let {id} = req.params;  // extracting the id 
    let deleteChat =  await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats");
})



app.get("/",(req,res)=>{
    res.send("root is working ")
});

app.listen(5500,()=>{ 
    console.log("server is listening on on port 5500");
})