export default async function Home(){
  
  await fetch('/URL', {cache: 'force-cache'})
  return(
    <>
    <div>안녕</div>
   
    </>
  )
}