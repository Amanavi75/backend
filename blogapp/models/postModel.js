// import mongoose 
const mongoose = require("mongoose");

// route handler 
const postSchema = new mongoose.Schema({
    title:{     //post title 
        type:String,
        required:true,
    },
    body:{            // content 
        type:String,    
        required:true,
    },
    comments:[{      // comment 
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }],
});










module.exports = mongoose.model("Post",postSchema);