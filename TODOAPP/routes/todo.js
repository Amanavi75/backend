// creating the differebt route 
const express =require("express");

const router = express.Router();

// import controller
 const {createTodo} = require("../controllers/createTodo");

 //import controller for get todo
 const {getTodo,getTodoById} = require("../controllers/getTodo");

 //import controller for update todo
 const {updateTodo} = require("../controllers/updateTodo");

 // import controler for delete todo
 const {deleteTodo} = require("../controllers/deleteTodo");

 // define api routes
 router.post("/createTodo", createTodo);

 //deifning api file for the get todos 
 router.get("/getTodos", getTodo);

 router.get("/getTodos/:id", getTodoById);

 // put request for updation 
 router.put("/updateTodo/:id",updateTodo);

 // delete request 
 router.delete("/deleteTodo/:id",deleteTodo);

 module.exports = router; 