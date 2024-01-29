const Todo = require("../models/Todo");

exports.deleteTodo = async( req , res ) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Todo delete "
        })
    }
    catch(err){
        console.log("error occured ")
        console.log(err)
        res.status(500).json({
            success:false,
            data:"nothing",
            message:"some error occured",
        })
    }
}

exports.deleteAll = async(req,res) => {
    try{
        const {id} = req.params;
        await Todo.deleteAll();

        res.json({
            success:true,
            message:"all todo deleted succesfully"
        })
    }
    catch(err){
        console.log("error occured ")
        console.log(err)
        res.status(500).json({
            success:false,
            data:"nothing",
            message:"some error occured",
        })
    }

}