import { connectDB } from "util/database.js";
import { ObjectId } from "mongodb";
export default async function hander(req, res) {
  
  console.log(req.query)
  res.status(200).json("완료")
}
