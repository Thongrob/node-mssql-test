const express = require("express")
const router = express.Router()
const {getToken} = require("../controllers/gettokenController")
var Employee = require('../employeeInfo')
const dboperations = require('../dboperations')

// //ทดสอบ route 
// router.get('/gettoken',(req, res) => {
// 	res.json({
// 	data: "Hello,this is  route"
// 	})
// })

router.post('/gettoken', getToken)




module.exports = router