const Post  = require("../models/postModel");

exports.createPost= async (req,res) =>   {
    try{
        const {title, body}= req.body;
        const post = new Post({title,body});
        const  savePost = await post.save();

        res.json({
            post:savePost,
        });
    }
    catch(error){
       return res.status(400).json({
        error:"error while creating the post",
       })
    } 
    
}; 

exports.getAllPosts = async (req,res)=>{
    try{
       const posts = await Post.find().populate("comments").populate("likes").exec();
    }
    catch(error){
       return res.status(400).json({
        error:"error while fetching posts",
       })
    }
}