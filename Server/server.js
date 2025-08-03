const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const attendanceRoute = require("./Routers/attendance")
const Authroute = require("./Routers/authentication")


const app = express()
const PORT = 5000;




// MongoDB Atlas Connection URI (replace with your actual connection string)
const uri = "mongodb+srv://sehdevjashan321:Jashan%40321@cluter101.qsgljrc.mongodb.net/mydb?retryWrites=true&w=majority&appName=cluter101";

mongoose.connect(uri)
    .then(() => {console.log("User DB is Connected")})
    .catch(err => console.log(err));
// Create a new MongoClient
// Middleware to parse incoming JSON requests
app.use(express.json());

app.use('/api/attendance', attendanceRoute);
app.use('/',Authroute);

mongoose.connect(uri)
.then(()=>{console.log("DB is Connected")})
.catch(err=>(console.log(err)));

// Route to handle server startup
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
