function Button({description, className}) {
	return(
		<>
			<button 
				className={`cursor-pointer shadow-lg hover:shadow-black rounded-full w-full	h-full font-bold ${className}`}>
				{description}
			</button>
		</>
		);
}

export default Button;