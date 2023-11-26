import { connectDB } from "util/database.js";
import { ObjectId } from "mongodb";
export default async function hander(req, res) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  if (req.method == "GET") {
    res.status(200).json("GET 요청 성공");
    console.log(req.body._id);
  } else if (req.method == "POST") {
    if (req.body.title == "" || req.body.content == "") {
      return res.status(500).json("에러가 발생했습니다.");
    }
    await db
      .collection("post")
      .updateOne(
        { _id: new ObjectId(req.body._id) },
        { $set: { title: req.body.title, content: req.body.content } }
      );
    return res.redirect(302, "/list");
  }
}
