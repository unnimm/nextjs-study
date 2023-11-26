import { connectDB } from "util/database.js";
export default async function hander(요청, 응답) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  let today = new Date();

  if (요청.method == "GET") {
    응답.status(200).json(today.toLocaleString());
  } else if (요청.method == "POST") {
    db.collection("post").insertOne(요청.body);
    console.log(요청.body)
    응답.status(200).json("POST성공");
  }
}
