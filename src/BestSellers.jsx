import Card from './Card';
import Button from './Button';
import pizza from '/pizza.png';
import egg from '/egg.png';
import tofu from '/tofu.png';

function BestSellers(){
	return(
		<>
			<section className="Best-sellers m-10 lg:my-18 lg:mx-20 min-h-screen">
		        <div className="seller-contain">
		          <div className="tittle-contain text-center p-2 lg:p-16">
		            <h2 className="tittle lg:text-4xl md:text-4xl text-2xl font-bold p-6">BEST SELLERS</h2>
		            <p className="tittle-description lg:text-xl">Description. Empty paragraph for your text.</p>
		          </div>
		          <div className="card-contain flex justify-around flex-wrap py-8">
		            <Card tittle="Egg" price="10.99" image={egg} alt="Egg" style={{ backgroundColor: "#008BBF"}} />
		            <Card tittle="Tofu" price="15.99" image={tofu} alt="Tofu" style={{ backgroundColor: "#008BBF"}}/>
		            <Card tittle="Pizza" price="20.99" image={pizza} alt="Pizza" style={{ backgroundColor: "#008BBF"}} />
		          </div>
		        </div>
		        <div className="flex justify-center">
		          <div className="btn-contain w-48 h-12">
		            <Button description="SHOP ALL" className="bg-[#FFB600] hover:bg-[#FFD700]" />
		          </div>
		        </div>
	      	</section>
		</>

		);
}

export default BestSellers;