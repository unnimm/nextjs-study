'use client'
import { useRouter } from "next/navigation"

export default function ListButton(){
    const router = useRouter()

    const onClickHandler = () => {
        router.push('/list')
    }

    return(
        <button className="w-24 h-10 text-sm text-white bg-blue-500 rounded-md" onClick={onClickHandler}>List 페이지 이동</button>
    )
}