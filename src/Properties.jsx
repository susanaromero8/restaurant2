import Element from './Element';
import SpinningText from './SpinningText';
import force from '/force.png';
import Button from './Button';
import eggplant from '/eggplant.png';
import broccoli from '/broccoli.png';
import burger from '/burger.png';
import peanut from '/peanut.png';
import leaves from '/leaves.png';

function Properties() {
	return(
		<>
			<section className="Properties m-10 lg:my-18 lg:mx-20">
				<div className="properties-contain">
					<div className="properties-tittle text-center p-2 lg:p-16">
						<h2 className= "tittle lg:text-4xl md:text-4xl text-2xl font-bold p-6">More than a mix</h2>				
					</div>
					<div className="element-contain flex flex-wrap justify-around gap-6 mb-8 px-6">
						<Element tittle="Plant-Based" subtittle="Protein" style={{ backgroundColor: "#FFB600"}} image={force} description="force" />
						<Element tittle="Makes Veggies" subtittle="Taste Amazing" style={{ backgroundColor: "#FF5C14"}} image={eggplant} description="Eggplant" />
						<Element tittle="Probiotic" subtittle="Fiber" style={{ backgroundColor: "#008BBF"}} image={broccoli} description="Broccoli" />
						<Element tittle="Delicius" subtittle="Texture" style={{ backgroundColor: "#008BBF"}} image={burger} description="Burger" />
						<Element tittle="Free of Top" subtittle="8 Allergens" style={{ backgroundColor: "#FF5C14"}} image={peanut} description="Peanut" />
						<Element tittle="100%" subtittle="Vegan" style={{ backgroundColor: "#FFB600"}} image={leaves} description="Leaves" />
					</div>					
				</div>
				<div className="flex justify-center">
		        	<div className="btn-contain w-48 h-12">
		            	<Button description="TASTE THE DIFFERENCE" className="bg-[#FFB600] hover:bg-[#FFD700]"/>
		        	</div>
		        </div>
			</section>
		</>
		);
}

export default Properties;