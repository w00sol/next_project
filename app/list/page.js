export default function list() {
	let 상품 =['tomatoes', 'pasta', 'coconut']		
	return (
		<div>
			<h1 className="title">상품목록</h1>
			{
				상품.map(function(a,i){
					return(
						<div className="food">
							<h4>{a} $40</h4>
						</div>
					)
				})
			}			
		</div>
	)
}