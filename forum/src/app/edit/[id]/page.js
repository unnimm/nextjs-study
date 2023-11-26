import { connectDB } from "util/database.js";
import { ObjectId } from "mongodb";
import EditButton from '../../components/EditButton';


export default async function Edit(props) {
  const client = await connectDB
  const db = client.db('forum')
  let data = await db.collection('post').findOne({ _id: new ObjectId(props.params.id)})


  return (
    <>
      <div>글 수정</div>
      <form action="/api/post/edit" method="POST">
        <input name="_id" defaultValue={data._id.toString()}></input>
        <input name="title" defaultValue={data.title} className="border"></input>
        <input name="content" defaultValue={data.content} className="border"></input>
        <button type="submit">수정</button>
      </form>
    </>
  );
}
