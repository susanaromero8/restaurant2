import Filter from "./Filter";
import salad from "/salad.png";
import shawarma from "/shawarma.png";
import soup from "/soup.png";
import postre from "/postre.png";

function Category() {
  return (
    <>
      <section id="category" className="p-10">
        <div className="tittle-contain text-center m-10 lg:m-20">
          <h2 className="tittle lg:text-4xl md:text-4xl text-3xl font-bold">
            Category
          </h2>
        </div>
        <div className="flex justify-around flex-wrap gap-6 px-6">
          <Filter
            tittle="Entradas"
            href="entradas"
            image={salad}
            style={{ backgroundColor: "#FF5C14" }}
          />
          <Filter
            tittle="Platos Principales"
            href="principales"
            image={shawarma}
            style={{ backgroundColor: "#FF5C14" }}
          />
          <Filter
            tittle="Vegetarianos"
            href="vegetarianos"
            image={soup}
            style={{ backgroundColor: "#FF5C14" }}
          />
          <Filter
            tittle="Postres"
            href="postres"
            image={postre}
            style={{ backgroundColor: "#FF5C14" }}
          />
        </div>
      </section>
    </>
  );
}

export default Category;
