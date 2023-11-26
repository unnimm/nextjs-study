"use client"
import { useRouter } from "next/navigation"

export default function EditButton(props){

   const router = useRouter();

   const onClickHandler=()=>{
    router.push('/edit/'+ props.id)
   }

    return(
        <button className="w-[100px] h-[40px] border" onClick={onClickHandler}>수정하기</button>
    )
}