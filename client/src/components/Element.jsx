function Element({tittle, subtittle, style, image, description}) {
	return(
		<>
			<div className="element flex flex-col items-center text-center flex-wrap">
				<h3 className="element-tittle p-6 font-bold text-lg">{tittle}</h3>	 
				<div className="circle contain rounded-full w-36 h-36 flex items-center justify-center transition duration-150 ease-out hover:ease-in
					hover:scale-110 cursor-pointer" style={style}>
					<div className="icon-contain min-w-10 max-w-20 max-h-20">
						<img src={image} alt={description} className="w-full h-full" />
					</div>
				</div>
				<h3 className="element-tittle-2 p-6 font-bold text-lg">{subtittle}</h3>
			</div>
		</>
		);
}

export default Element;