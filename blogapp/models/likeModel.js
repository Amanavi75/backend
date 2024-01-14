// import mongoose 
const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"  // reference to the post model
        },
        user:{   // storing the detail of user 
           type:String,
           required:true,
        },
});

// exports 
module.exports =mongoose.model("Like" , likeSchema);