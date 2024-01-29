const Todo = require("../models/Todo");

exports.update = async( req , res ) => {
    try{
        const {id} = req.params;
        const {title,description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:'Updated Succesfully',
        })
    }
    catch(err){
        console.log("error occured ")
        console.log(err)
        res.status(500).json({
            success:false,
            data:"",
            message:"some error occured",
        })
    }
}