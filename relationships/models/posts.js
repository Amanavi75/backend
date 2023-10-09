const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(()=>console.log("connnection successful"))
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema= new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

const adddata = async ()=>{
    let user1 =new User({
        username:"rahulkumar",
        email:"rahul@gmai.com",
    });

    let post1 = new Post({
        content:"hello world",
        likes:7
    });

    post1.user = user1;
    await user1.save();
    await post1.save();
};

adddata();
