
import { connectDB } from 'util/database.js';

export default async function Handler(req, res){
    const db = (await connectDB).db('forum')
   
    if (req.method == "POST"){
        if(req.body.name == '' || req.body.email == '' || req.body.password == ''){
            return res.status(500).json('빈칸 에러')
        }

        db.collection('signup').insertOne(req.body)
        return res.redirect(302, '/list')
    }

   
    
}