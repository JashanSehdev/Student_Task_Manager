const express = require('express')
const router = express.Router();

const {markAttendance,showSomething} = require('../controllers/attendance')

router.post("/",markAttendance);
router.get("/",showSomething);

module.exports = router