"use client"
import { useRouter } from "next/navigation"

export default function EditButton(props){

   const router = useRouter();

   const onClickHandler=()=>{
    router.push('/edit/'+ props.id)
   }

    return(
        <button onClick={onClickHandler}>✏️</button>
    )
}