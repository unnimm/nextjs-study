import { connectDB } from "util/database.js";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let db = (await connectDB).db("forum");

  if (req.method == "DELETE") {
    await db.collection('post').deleteOne({_id : new ObjectId(req.body)});
    return res.redirect(302, "/list");
  }
}
