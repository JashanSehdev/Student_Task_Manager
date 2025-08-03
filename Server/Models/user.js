    const mongoose = require("mongoose");
    const Attendance = require("./attendance");

    const uri = "mongodb+srv://sehdevjashan321:Jashan%40321@cluter101.qsgljrc.mongodb.net/user?retryWrites=true&w=majority&appName=cluter101";

    

    const userSchema = mongoose.Schema({
        username:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true,
            minlength:6
        },
        course:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }],
        deadline:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"deadline"
        }],
        tasks:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"tasks"
        }],
        projects:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"projects"
        }],


    })

    const userModel = mongoose.model('User',userSchema)

    module.exports = userModel