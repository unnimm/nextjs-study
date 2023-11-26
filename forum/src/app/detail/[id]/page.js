import { connectDB } from "util/database.js";
import { ObjectId } from "mongodb";
import EditButton from "../../components/EditButton";

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("forum");
  let data = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <>
      <div>
        <h4>수정페이지</h4>
        <h4>{data.title}</h4>
        <p>{data.content}</p>
      </div>
    </>
  );
}
