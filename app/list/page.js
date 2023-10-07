// import Image from "next/image"
// import image0 from "/public/food0.png"
// import image1 from "/public/food1.png"
// import image2 from "/public/food2.png"
export default function list() {
	let 상품 =['tomatoes', 'pasta', 'coconut']		
  let 가격 =[20, 30, 40]
	return (
		<div>
			<h1 className="title">상품목록</h1>
			{
				상품.map(function(a,i){
					return(
						<div className="food" key={i}>
              {/* 경로는/부터 시작하면 public폴더부터 바로시작 //이유: 사이트발행하면 사이트root경로로 자동으로 이동*/}
              {/* img태그사용시 //src경로 변수사용시{}안에 넣어서 따옴표{'/food' + i + '.png'}, 백틱{`/food${i}.png`}*/}
              <img src={'/food' + i + '.png'} alt="토마토이미지" className="food_img"></img>
              {/* <img src={`/food${i}.png`} alt="토마토이미지" className="food_img"></img> */}
              {/* 최적화된 이미지사용시엔 Image import 해서 사용 //src에 넣을 이미지 import해서 사용*/}
              {/* <Image src={image0} className="food_img"></Image> */}
							{/* <h4>{상품[i]} ${가격[i]}</h4> */}
							<h4>{a} ${가격[i]}</h4>
						</div>
					)
				})
			}			
		</div>
	)
}