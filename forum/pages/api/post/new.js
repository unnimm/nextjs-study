
import { connectDB } from 'util/database.js';

export default async function Handler(req, res){
    const db = (await connectDB).db('forum')
    const result = await db.collection('login').find().toArray()
    // console.log(result)
   
    if (req.method == 'POST'){
        if(req.body.login == '' || req.body.password == ''){
            return res.status(500).json('빈칸 에러')
        }

        for(let i in result){
            if (result[i].login == req.body.login){
                return res.status(500).json('똑같은 login 아이디')
            }
        }
        db.collection('login').insertOne(req.body)
        return res.status(200).json('로그인 성공')
    }

   
    
}