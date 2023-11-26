import { connectDB } from "util/database.js";
export default async function hander(요청, 응답) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  if (요청.method == "GET") {
    응답.status(200).json("GET 요청 성공");
  } else if (요청.method == "POST") {
    if(요청.body.title == '' || 요청.body.content == ''){
        return 응답.status(500).json("에러가 발생했습니다.")
    }
    db.collection("post").insertOne(요청.body);
    return 응답.redirect(302, '/list')
  }
}
