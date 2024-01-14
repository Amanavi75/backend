const mongoose = require("mongoose");

require("dotenv").config();

// connecting the database from particular url 
const connectWithDb = () => {
     mongoose.connect(process.env.DATABASE_URL ,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
     })
     .then(console.log("db connected successfully"))
     .catch((error) => {
       console.log("db facing issues ");
       console.log(error);
       process.exit(1); 
     })

};
module.exports = connectWithDb;