// 변수1개일때 import
// import age from './data.js'
// 변수2개이상일때 import
import {age, name} from './data.js'
import Hello from './hello.js'

export default function cart(){
  return(
    <div>
      <Hello></Hello>
      <h1 className="title">cart</h1>      
      <div className="cart_item">
        <p>상품명{age}{name}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <div className="cart_item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <CartItem></CartItem>
      <CartItem></CartItem>
    </div>
  )
}

// component만들기
// 1.component만들땐 function 밖에 function만들기 변수명은 대문자로 시작!!
// 2. return()안에 축약하고싶은 html작성
// 3. 작명한 변수명 상단 return언 html에 사용 ex) <CartItem></CartItem> 
function CartItem(){
  return(
    <div className="cart_item">
        <p>상품명 </p>
        <p>$40</p>
        <p>1개</p>
      </div>
  )
}

// 그냥 componenet만드는건 server Component
// 상단에 'use client' 작성 후 만드는 componenet는 client component

// server componenr client component 차이
// 1. server component는 html에 자바스크립트 기능 넣기 불가능 client는 자바스크립트 기능 사용가능 (ex. onClick= {function(){}} 이런거)
// server component 장점 로딩속도 빠름,검색엔진노출 이점있음
// client componenet 단점 로딩속도 느림

// 큰페이지는 server component js기능 필요한 곳만 client component사용추천

// *****
// 기능추가할 컴포는트만 파일분할해서 코드작성하는법
// ex) cart 폴더에 page.js 와 나란히 Data.js폴더만들기 data.js폴더안에 변수나 함수 넣고 그것을 page.js로가져와서 쓰기
// data.js 가져다 page.js에사용하는법
// data.js에 변수만들고 page.js에 import시키기 (data.js에 변수만들고 page.js에 import시키기위해서는 data.js파일에 변수만들고 export먼저 시켜야함 ex) export default 변수명; 그리고 page.js에 import 변수명 from '/경로작성' 후에 html안 필요한곳에 {변수명}작성)
// (./현재경로 ../상위폴더)

// data.js에 export 할떄 변수 여러개 사용하려면 export{변수명1, 변수명2} 이런식으로 {}안에 넣어야하고, import할때도 변수명 {}안에 다 적어 줘야함 
