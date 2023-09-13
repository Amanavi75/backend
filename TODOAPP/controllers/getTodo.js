// import the model
const Todo = require("../models/todo");

// define route handler 

exports.getTodo = async(req,res) => {
    try{
       
        // fetch all todo items from the database 

        const todos= await Todo.find({});

        // response 
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Todo data is fetched"

        })
       
    }

    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

exports.getTodoById= async(req,res) => {
   try {
 // exttract todo items  basis on id 
    const id =  req.params.id; // fetch id
    const todo = await Todo.findById({_id:id})

    // if data not found

    if(!todo){
          return res.status(404).json({
            success:false,
            message:"no data found with given id ",
          })
    }
    // data for given id is found 

    res.status(200).json({
        success:true,
        data:todo,
        message: `Todo ${id} data successfully fet hed`,
    })
   }
catch(err){ // in case if error occured 
    console.error(err);
    res.status(500).json({
        success:false,
        data:"internal server error",
        message:err.message,
    })
}
}