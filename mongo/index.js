const mongoose = require("mongoose");
// requiring the mongo db  packages 

main().then((result) => {
    console.log("connection successfull");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
// function to create connection with the mongodb server 

// schema defines  the shape of the documents with in that collections 

// we use mongoose.schema mthod to create a schema for the data 

const userSchema = new mongoose.Schema({
    name: String, // here all the inouts types must be start for the capital letter 
    email:String,
    age:Number,
});

// now to construct documnets , we use models which is class

//*mongoose.model is used to construct the model and havimg the two parameter one is similar to the model name but that us the name of collection that is stored in the database and other is the schema type

const User = mongoose.model("User", userSchema);

const employee = mongoose.model("Employee",userSchema);

// inserting one doc using mongoose 

const user1 = new User ({
    name:"ama", email:"amanav75@gmail.com",
    age:48,
})

user1.save();

const user2 = new User({
    name:"Rav",
    email:"ravdevrakonda@gmail.com",
    age:76.
});

user2.save().then((res)=>{
    console.log(res);
})
.catch((err) =>{
    console.log(err);
});

// inserting more than one data in db 
// we will use .insertMany 

User.insertMany([
    {name:"ani",email:"ani@gmail.com",age:23},
    {name:"kapi",email:"kapil@gmail.com",age:104},
    {name:"adity",email:"aditya@gmail.com",age:105},
    {name:"anki",email:"ankit@gmail.com",age:105},
]).then((res)=>{
    console.log(res);
})
 
//  *NOTE - Mongoose uses Operations buffering : it means taht mongoose lets you start using your models immediately , without waiting for mongoose to establish a connection to mongodb 

// method to find the data 
// find always return a query object which is not a prmise but it is thennable object as we are doing the same with the promises 

//explore the rest of the find method like , *findMethof byId and many more on the official documentation 
User.find({age:{$gt:48}}) //* will return all queries in which age is greater than 48 
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

// example of find method using the id 
//* we have to use id as String 
/*User.findOne({_id:"i83583583453737"}) //* will return the data of that particular id 
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}); */

//* update method - Model.updateOne( condition , update value )
User.updateOne({name:"aman"},{age:22})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
//Model.findOneAndUpdate()
User.findOneAndUpdate({name:"kapi"},{age:35})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
// deleteOne method: used to delete one queries 
// it also returns the query object 

User.deleteOne({name:"aman"})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err);
});
//we can also use delete Model.findByIdAndDelete() and Model.findOneAndDelete()
//* User.findByIdAndDelete("345093495").then((res)=>{
//* console.log(res) });   

// schema validation means defining some rule or constraints for the schema 

