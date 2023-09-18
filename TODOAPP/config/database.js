// this whole functionaltiy is resposible for the coonection of database to theser ver 

// we also have to install the mongoose package and require it 

const mongoose = require("mongoose");

require("dotenv").config(); // we have to install the dotenv package for the connection 
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(" db connection is successfull"))
    .catch((error) => {
        console.log(" issue in db connection ");
        console.log(error.message);
        process.exit(1); 
    })
}

module.exports = dbConnect;