const mongoose = require ("mongoose");   

const chatSchema = new mongoose.Schema({
  from:{
    type:String,
    
  },
  to:{
    type:String,
    required: true, 
  },
  msg:{
    type:String,
    maxlength:60
  },
  created_at:{
    type:Date,
    required: true,
   
  }
});

const Chat = mongoose.model("Chat",chatSchema);
module.exports=Chat;

// reason behind adding a different folder for the schema or model creation is that when we have a long database we can't every thing in index.js 