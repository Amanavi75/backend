const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(()=>console.log("connnection successful"))
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema= new Schema({
   item:String, 
   price : Number,
});

const Order = mongoose.model("Order",orderSchema); // order schema 

const customerSchema = new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref: "Order",
        }
    ]
});

const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async ()=>{
    let cust1 = new Customer({
        name:"rahul",
    });

    let order1 = await Order.findOne({item:"chips"});
    let order2 = await Order.findOne({item:"choclate"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);
   
   let result= await cust1.save();
   console.log(result);

}
addCustomer();



//const addOrders = async ()=>{
 // let res=  await Order.insertMany([
   //     {item:"samosha" , price:12},
     //   {item:"chips" , price:20},
       // {item:"choclate" , price:30}

//  ]);
//  console.log(res);
//};

//addOrders();