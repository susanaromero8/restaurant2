import { useIntl } from "react-intl";
import Filter from "./Filter";
import salad from "/salad.png";
import shawarma from "/shawarma.png";
import soup from "/soup.png";
import postre from "/postre.png";

function Category() {
  const intl = useIntl();
  return (
    <>
      <section id="category" className="p-10">
        <div className="tittle-contain text-center m-10 lg:m-20">
          <h2 className="tittle lg:text-4xl md:text-4xl text-3xl font-bold">
            {intl.formatMessage({ id: "category.title" })}
          </h2>
        </div>
        <div className="flex justify-around flex-wrap gap-6 px-6">
          <Filter
            tittle={intl.formatMessage({ id: "category.entry" })}
            href="entradas"
            image={salad}
            style={{ backgroundColor: "#FF5C14" }}
          />
          <Filter
            tittle={intl.formatMessage({ id: "category.main" })}
            href="principales"
            image={shawarma}
            style={{ backgroundColor: "#FF5C14" }}
          />
          <Filter
            tittle={intl.formatMessage({ id: "category.vegetarian" })}
            href="vegetarianos"
            image={soup}
            style={{ backgroundColor: "#FF5C14" }}
          />
          <Filter
            tittle={intl.formatMessage({ id: "category.sweet" })}
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
