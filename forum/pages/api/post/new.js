
import { connectDB } from 'util/database.js';

export default async function Handler(req, res){
    const db = (await connectDB).db('forum')
    const result = await db.collection('post').find().toArray()
    // console.log(result)
   
    if (req.method == 'POST'){
        if(req.body.title == '' || req.body.content == ''){
            return res.status(500).json('빈칸 에러')
        }

        // for(let i in result){
        //     if (result[i].login == req.body.login){
        //         return res.status(500).json('똑같은 login 아이디')
        //     }
        // }
        db.collection('post').insertOne(req.body)
        return res.redirect(302, '/list')
    }

   
    
}