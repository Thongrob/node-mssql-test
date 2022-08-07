// var config = require('./dbconfig')
// const sql = require('mssql')

// async function getEmployees() {
//   try{
//     let pool = await sql.connect(config)
//     let employee = await pool.request().query("SELECT * FROM employee")
//     return employee.recordsets
//   }

//   catch(error){
//     console.log(error);
//   }
// }

// module.exports = {
//   getEmployees : getEmployees
// }