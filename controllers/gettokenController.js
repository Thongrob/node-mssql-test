
//ทดสอบ method post OK
// exports.getToken = (req, res) => {
//   res.json({
//     data:"Message from controller"
//   })
// }


exports.getToken = (req, res) => {
  const {username, password} = req.body
  res.json({
   data: {username, password}
  })
}