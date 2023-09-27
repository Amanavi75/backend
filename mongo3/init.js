// * initializing data base ;

const mongoose = require ("mongoose");
// requiring the chat model and chat schema to create new chat 
const Chat = require("./models/chat.js");


main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


// * creating a chat  array  for inserting the no of chat 
let allChats=[
    {
        from:"ravi",
        to:"andra ",
        msg:"ekds bro",
        created_at:new Date()
       },

    {
        from:"tharun",
        to:"vaishnavi",
        msg:"i love you ",
        created_at:new Date()
       },
    {
        from:"aman ",
        to:"ravi ,anil and tharun",
        msg:"how it is going boys",
        created_at:new Date()
       },
       {
        from:"anil",
        to:"jyotika chakroborty",
        msg:"send me your exam sheet",
        created_at:new Date()
       },
];
// inserting chats   in database  we will directly put chat array in insert many function 
 Chat.insertMany(allChats);

 