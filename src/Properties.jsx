import Element from "./Element";
import SpinningText from "./SpinningText";
import force from "/force.png";
import Button from "./Button";
import eggplant from "/eggplant.png";
import broccoli from "/broccoli.png";
import burger from "/burger.png";
import peanut from "/peanut.png";
import leaves from "/leaves.png";

function Properties() {
  return (
    <>
      <section id="properties" className="Properties p-10">
        <div className="properties-contain">
          <div className="properties-tittle text-center m-10 lg:m-20">
            <h2 className="tittle lg:text-4xl md:text-4xl text-3xl font-bold">
              More than a mix
            </h2>
          </div>
          <div className="element-contain flex flex-wrap justify-around gap-6 px-6">
            <Element
              tittle="Plant-Based"
              subtittle="Protein"
              style={{ backgroundColor: "#FFB600" }}
              image={force}
              description="force"
            />
            <Element
              tittle="Makes Veggies"
              subtittle="Taste Amazing"
              style={{ backgroundColor: "#FF5C14" }}
              image={eggplant}
              description="Eggplant"
            />
            <Element
              tittle="Probiotic"
              subtittle="Fiber"
              style={{ backgroundColor: "#008BBF" }}
              image={broccoli}
              description="Broccoli"
            />
            <Element
              tittle="Delicius"
              subtittle="Texture"
              style={{ backgroundColor: "#008BBF" }}
              image={burger}
              description="Burger"
            />
            <Element
              tittle="Free of Top"
              subtittle="8 Allergens"
              style={{ backgroundColor: "#FF5C14" }}
              image={peanut}
              description="Peanut"
            />
            <Element
              tittle="100%"
              subtittle="Vegan"
              style={{ backgroundColor: "#FFB600" }}
              image={leaves}
              description="Leaves"
            />
          </div>
        </div>
        <div className="flex justify-center p-2 lg:m-20">
          <div className="btn-contain w-60 h-12 flex justify-center">
            <Button
              description="TASTE THE DIFFERENCE"
              className="bg-[#FFB600] hover:bg-[#FFD700]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Properties;
