import { connectDB } from "util/database.js";
import ListItem from './ListItem';

export default async function List(props) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();

  return (
    <>
    <ListItem result = {result}/>
    </>
  );
}
