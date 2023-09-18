// schema validation means defining some rule or constraints for the schema 

const mongoose = require("mongoose");
// requiring the mongo db  packages 

main().then((result) => {
    console.log("connection successfull");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
// function to create connection with the mongodb server 

const bookSchema = new mongoose.Schema({
    title:{
        type:String,

    },
    author:{
        type:String,
    },
    price:{
        type:Number
    },
    category:{
        enum:["fiction","non fiction"]
    },
});

//creating model for book
const Book = mongoose.model("Book",bookSchema);

let book1 = new Book({
    title:"gone girl",
    author:"aditya",
    price:400,
    category:"fiction"
    
}); 

book1
.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

// default is a also a schema valitdation which always sets a default value for the object if that particular field is not required 

// and there is lot more schema validation , go through the official documentation for the detailed explanation

//* during update if we want to check the validators then we have set runvalidatorrs = true and in updation syntax

// * we can also print that particular error in catch : err.errors.properties.message