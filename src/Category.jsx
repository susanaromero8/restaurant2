import Product from './Product';
import salad from '/salad.png';
import shawarma from '/shawarma.png';
import soup from '/soup.png';
import postre from '/postre.png';

function Category(){
	return(
		<>
			<section id="category" className="m-10 lg:my-18 lg:mx-20">
				<div className="tittle-contain text-center p-2 lg:p-2">
		            <h2 className="tittle lg:text-4xl md:text-4xl text-2xl font-bold pb-6">Category</h2>
		        </div>
				<div className="flex justify-around flex-wrap gap-6 pt-8 pb-20 px-6">
					<Product tittle="Entradas" image={salad} style={{ backgroundColor: "#FF5C14"}} />
					<Product tittle="Platos Principales" image={shawarma} style={{ backgroundColor: "#FF5C14"}} />
					<Product tittle="Vegetarianos" image={soup} style={{ backgroundColor: "#FF5C14"}} />
					<Product tittle="Postres" image={postre} style={{ backgroundColor: "#FF5C14"}} />
				</div>
			</section>
		</>
		);
}

export default Category;