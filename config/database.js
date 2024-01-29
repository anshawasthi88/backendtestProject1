const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
    })
    .then(() => {
        console.log("DB connection successfully")
    }).catch((error) => {
        console.log("error occured")
        console.log(error.message)
        process.exit(1);
    })
}

module.exports = dbconnect