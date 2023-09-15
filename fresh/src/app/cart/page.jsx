import Hello from "./hello";
export default function Cart() {
  let cart = ["tomatoes", "pasta", "coconut"];
  let cards = ["삼성카드", "롯데카드", "현대카드"];
  return (
    <div className="bg-[#303030] w-full h-full text-white">
      <h4>Cart</h4>
      
      {/*장바구니 목록 보기*/}
      {cart.map((item, i) => {
        return  <CartItem item={cart[i]} />
      })}

      {/*카드 배너*/}
      {
        cards.map((card, i)=>{
            return <Banner card={cards[i]}/>
        })
      }
      <RedButton blue="blue"/>
    </div>
  );
}
function CartItem(props) {
  return (
    <>
      <div className="p-[10px] flex border-b-[1px] border-white gap-2">
        <p>{props.item}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </>
  );
}

function Banner(props){
    return(
        <h4>{props.card} 결재 행사중입니다.</h4>
    )
}
function RedButton(props){
    return(
        <button className={"bg-"+props.blue+"-400 w-20 h-10 rounded-lg  text-white"}>버튼</button>
    )
}