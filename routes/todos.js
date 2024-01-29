const express = require("express");

const router = express.Router();

// import controller 

const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {update} = require("../controllers/update");
const {deleteTodo} = require("../controllers/deleteTodo");
const {deleteAll} = require("../controllers/deleteTodo")

router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",update);
router.delete("/deleteTodo/:id",deleteTodo);
router.delete("/deleteAll",deleteAll)

module.exports = router;
