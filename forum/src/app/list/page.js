import { connectDB } from "util/database.js";
import Link from "next/link";
import { ObjectId } from "mongodb";
import { useParams } from "next/navigation";
import DetailLink from "./DetailLink";
import EditButton from "../components/EditButton";

export default async function List(props) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();

  return (
    <>
      <div>
        {result.map((post, i) => {
          return (
            <>
              <div
                className="w-[100px]rounded-lg shadow-md p-3 hover:scale-105"
                key={i}
              >
                <div>{result[i].title}</div>
                <div className="text-xs">{result[i].content}</div>
                <DetailLink id = {result[i]._id}/>
                <EditButton id = {result[i]._id}/>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
