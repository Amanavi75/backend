// import controls 
const Post = require("../models/postModel");
const  Like = require("../models/likeModel");

// like a post 
exports.likePost=async (req,res) =>{
    try{
        const {post, user}= req.body;
        const like = new Like({
            post, user,
        })
        const savedLike = await like.save();

        // update the post collections basis on this 
        const updatePost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new:true}).populate("likes").exex();

        res.json({
            post:updatePost,
        }); 
    }
    catch(error){
        return res.status(400).json({
            error: "error while fetching the post "
        })
    }
}

// unlike post 
exports.unlikePost = async (req,res)=>{
    try{
        const{post, like}= req.body;
        //find and delete the like from the like collections 
        const deletedLike= await Like.findOneAndDelete({post:post,_id:like});

        // update the post collections 
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},
            {new:true});
        
        res.json({
            post:updatedPost,
        });

    }
    catch(error){
        return res.status(400).json({
            error:"error in unliking post",
        });
    }
}











exports.dummyLink = (req,res) =>{
    res.send("this is your dummy page ");
}; 