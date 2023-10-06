import Link from "next/link";

export default function Layout({ children }) {
  return (       
      <div className='payment'>
				<Link href='/cart/payment'>결제페이지</Link>	
        <p className="event">현대카드 무이자이벤트 중</p>
        {children}
			</div>    
  )
}
