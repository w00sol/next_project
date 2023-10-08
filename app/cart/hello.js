// 오늘의 숙제 :

// <h1>안녕하세요</h1> 라는 html을 다른 js 파일에 컴포넌트로 만들어놓고

// import 해서 /cart 페이지에 집어넣어봅시다. 

// /cart 페이지 접속하면 '안녕하세요'가 잘 보이면 성공입니다. 

function Hello(){
  return(
    <h1 style={{textAlign: "center"}}>안녕하세요</h1>
  )
}

export default Hello;