const express = require("express");
const bodyParser = require("body-parser")
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

const todoRoutes = require("./routes/todos");

app.use("",todoRoutes);

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})

//connnecting to the database

const dbconnect = require("./config/database")

dbconnect();

app.get("/",(req,res) => {
    res.send('<h1>this is home page</h1>')
})

// app.post("/createTodo",(req,res) => {
//     <h1>this is createTodo page</h1>
// })
