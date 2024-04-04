import './App.css';
function SpinningText({text}) {
	const lenght = text.lenght;
	const deg = 360/ lenght;
	return(
		<>
			<div className="spinnig-text-wrapper relative bg-yellow-500 rounded-full grid place-items-center text-2xl font-bold">
				<div className="spinnig-text absolute w-full h-full m-0 animate-spin-slow">
					<p>{text.split("").map((letra, i) =>(
						<span key={i} style={{transform: 'rotate(${deg * i}deg)',}} className="absolute top-0 left-1/2 origin-center custom-transform-origin">
						{letra}
						</span>
						))}</p>
				</div>
				
			</div>
		</>

		);
}

export default SpinningText;
