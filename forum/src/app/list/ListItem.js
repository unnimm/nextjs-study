"use client";
import DetailLink from "./DetailLink";
import EditButton from "../components/EditButton";

export default function ListItem({ result }) {
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
                <DetailLink id={result[i]._id} />
                <EditButton id={result[i]._id} />
                <div
                  onClick={() => {
                    fetch('api/abc/id')

                    // fetch(`api/post/delete?_id=${result[i]._id}`).then(()=>{
                    //   console.log("삭제 완료")
                    // })

                    // console.log(result[i])
                    // fetch('/api/post/delete', {
                    //   method: "DELETE",
                    //   body: result[i]._id,
                    // }).then((r)=>{
                    //     if (r.status == 200){
                    //         return r.json()
                    //     }
                    // }).then(()=>{})
                }}
                >
                  버튼
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
