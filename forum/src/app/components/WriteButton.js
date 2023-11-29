'use client'
import { useRouter } from "next/navigation"

export default function WriteButton(){
    const router = useRouter()

    const onClickHandler = () => {
        router.push('/write')
    }

    return(
        <button className="w-28 h-10 text-sm text-white bg-blue-500 rounded-md" onClick={onClickHandler}>Write 페이지 이동</button>
    )
}