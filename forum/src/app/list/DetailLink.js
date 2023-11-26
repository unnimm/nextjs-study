"use client"
import { useRouter } from 'next/navigation';

export default function DetailLink(props){

    const router = useRouter();

    const onClickHandler = () => {
        return(router.push(`/detail/${props.id}`))
    }

    return(
        <>
        <button onClick={onClickHandler}>이동</button>
        </>
       
    )
}