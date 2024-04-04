function Card({tittle, price, image, alt, style}) {

	return(
		<>
			<div className="card-contain">
	            <div className="card">
	              <div className="product text-center">
	                <div className="product-image max-w-80 h-full max-h-80 p-10 py-20 rounded-lg transition duration-150 ease-out hover:ease-in
					hover:scale-110 cursor-pointer" style={style}>
	                  <img src={image} alt={alt} className=" w-60 max-h-32" />
	                </div>
	                <div className="product-info p-6">
		                <h2 className="product-tittle lg:text-xl p-2">{tittle}</h2>
		                <p className="product-price">{price}$</p>
	                </div>
	              </div>
	            </div>
          	</div>
		</>


		);
}

export default Card;