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
    address:[
        {
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User" , userSchema);

const addUsers = async()=>{
    let user1 = new User({
        username:"sherLockholmes",
        address:[{location:" pourtgal",
        city:"london",
            }],
    });
    user1.address.push({location:"pakistan",
    city:"islamabad",});
     
   let result = await user1.save();
   console.log(result);

};

addUsers();
// mongodn individually generated the id of 