const Todo = require("../models/Todo");

exports.getTodo = async( req , res ) => {
    try{
        //fetch all todo items from database
        const todos = await Todo.find({});

        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire todo data is fetched"
        })
    }
    catch(err){
        // console.log("error occured ")
        console.log(err)
        res.status(500).json({
            success:false,
            err:err.message,
            message:"Server error occured",
        })
    }
    // <h1>this is createTodo page</h1>
}


exports.getTodoById = async(req,res) => {
    try{
        //extract todo on basis of id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found"
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:"todo found"
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            err:err.message,
            message:"Server error occured",
        })
    }
}