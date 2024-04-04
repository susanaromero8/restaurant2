
function Banner({text, subtext, children}){
	return(
		<>
			<section>
		        <div className="banner-contain bg-[#FF5C14] text-center p-20 flex flex-col items-center gap-2">
		          <p className="text-4xl font-bold">{text}</p>
		          <h2 className="text-6xl mb-12">{subtext}</h2>
		          {children}	        
		        </div>
	      </section>
		</>

	);
}

export default Banner;
