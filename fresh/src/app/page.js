

export default function Home() {
  let name = 'park'
  let link = 'http://google.com'
  return (
    <div className="bg-[#303030] text-white">
      <h4 className="text-center mt-[150px] text-[30px]">애플 후레시</h4>
      <p className="text-center"> create by {name}</p>
      <a href={link}>링크</a>
    </div>
  )
}
