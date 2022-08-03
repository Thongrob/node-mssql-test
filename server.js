const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config()
const gettokenRoute = require('./routes/gettokenRoute')


const app = express()

//Conect cloud database
// mongoose.connect(process.env.DATABASE_URL,{
//   useNewUrlParser:true,
//   useUnifiedTopology:false
// })
// .then(() => console.log("Connect to database completed"))
// .catch((err) => console.log(err))

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// //route
// //ทดสอบ route ให้ response ทุก path ที่ requesr เข้ามา 
// app.get("*",(req, res) => {
//   res.json({
//     data : "This is message from server"

//   })
// })
app.use('/api', gettokenRoute)



const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Start server in  port ${port}`))