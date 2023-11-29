"use client";
import EditButton from "../components/EditButton";
import HomeButton from "../components/HomeButton";
import WriteButton from "../components/WriteButton";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <>
      <div>
        {result.map((post, i) => {
          return (
            <>
              <div
                className="w-1/3 rounded-lg shadow-md p-3 hover:scale-105"
                key={i}
              >
                <Link href={`/detail/${result[i]._id}`}>
                  <div>
                    <div>{result[i].title}</div>
                    <div className="text-xs">{result[i].content}</div>
                  </div>
                </Link>
                <div>
                  <EditButton id={result[i]._id} />
                  <div
                    onClick={() => {
                      // fetch(`api/post/delete?_id=${result[i]._id}`).then(()=>{
                      //   console.log("삭제 완료")
                      // })
                      fetch("/api/post/delete", {
                        method: "DELETE",
                        body: result[i]._id,
                      })
                        .then((r) => {
                          if (r.status == 200) {
                            return r.json();
                          }
                        })
                        .then(() => {});
                    }}
                  >
                    ❌
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <HomeButton />
      <WriteButton />
    </>
  );
}
