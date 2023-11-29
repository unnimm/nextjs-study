export default async function hander(req, res) {
  
  console.log(req.query)
  res.status(200).json("완료")
}
