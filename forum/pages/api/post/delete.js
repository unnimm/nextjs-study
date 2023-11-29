import { connectDB } from "util/database.js";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  
  if (req.method == "GET") {
    try{
        let db = (await connectDB).db("forum");
        let result = await db.collection('post').deleteOne({_id : new ObjectId(req.query._id)});
    }catch(error){
        res.status(500).json('서버에러')
    }
   
  }
}
