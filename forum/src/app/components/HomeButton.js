'use client'
import { useRouter } from "next/navigation"

export default function HomeButton(){
    const router = useRouter()

    const onClickHandler = () => {
        router.push('/')
    }

    return(
        <button className="w-24 h-10 text-sm text-white bg-blue-500 rounded-md" onClick={onClickHandler}>홈페이지로 이동</button>
    )
}