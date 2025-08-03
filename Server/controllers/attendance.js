const Attendance = require("../Models/attendance");


const markAttendance = async(req,res)=>{
    try{
        const {courseName,status,date} = req.body;
        console.log(req.body);

        const attendanceDate = date? newDate(date) : new Date();

        const attendance = new Attendance(
            {
                courseName,
                status,
                date : attendanceDate
            })

        await attendance.save();
        res.status(200).json({message: 'Attendence has been marked', attendance})
    } catch(err) {
        res.status(400).json({message: "Error marking Attendence",Error:err});
    }
}



const showSomething = async(req,res)=>{
    const count = await Attendance.countDocuments();
    const present = await Attendance.countDocuments({status: "Present"});
    const absent = await Attendance.countDocuments({status: "Absent"});
    res.send(`Total attendance records: ${count} \n present attendance records: ${present} \n absent attendance records: ${absent}`);
}


module.exports  = {markAttendance,showSomething}



