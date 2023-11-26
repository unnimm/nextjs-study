"use client"
import { useRouter } from "next/navigation";
export default function Content(props) {
    const router = useRouter();

    const onClick=()=>{
        router.push("/"+{props.params.id})
    }
  return (
    <>
      <div
        className="w-80 h-16 rounded-lg shadow-md p-3 hover:scale-105"
        key={props.i}
        onClick={onClick}
      >
        <div>{props.result[props.i].title}</div>
        <div className="text-xs">{props.result[props.i].content}</div>
      </div>
    </>
  );
}
