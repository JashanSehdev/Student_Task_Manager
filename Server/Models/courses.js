const mongoose = require('mongoose');

const uri = "mongodb+srv://sehdevjashan321:Jashan%40321@cluter101.qsgljrc.mongodb.net/course?retryWrites=true&w=majority&appName=cluter101";

// connecting db
mongoose.connect(uri)
.then(()=>{console.log("course db is connected")})
.catch(err=>{console.log("there is an error in course db",err.message)})

const courseSchema = mongoose.Schema({
    "courseName":String,
    "attendence":[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"attendence"

    }],
    "marks":[{
        "examName":String,
        "examMarks":Number
    }]
    // Here I want to add future scope for notes
})

module.exports = mongoose.model('course',courseSchema);