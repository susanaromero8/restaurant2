import Element from "./Element";
import SpinningText from "./SpinningText";
import force from "/force.png";
import Button from "./Button";
import eggplant from "/eggplant.png";
import broccoli from "/broccoli.png";
import burger from "/burger.png";
import peanut from "/peanut.png";
import leaves from "/leaves.png";
import { useIntl } from "react-intl";

function Properties() {
  const intl = useIntl();
  return (
    <>
      <section id="properties" className="Properties p-10">
        <div className="properties-contain">
          <div className="properties-tittle text-center m-10 lg:m-20">
            <h2 className="tittle lg:text-4xl md:text-4xl text-3xl font-bold">
              {intl.formatMessage({ id: "properties.title" })}
            </h2>
          </div>
          <div className="element-contain flex flex-wrap justify-around gap-6 px-6">
            <Element
              tittle={intl.formatMessage({ id: "properties.title.based" })}
              subtittle={intl.formatMessage({
                id: "properties.subtitle.protein",
              })}
              style={{ backgroundColor: "#FFB600" }}
              image={force}
              description="force"
            />
            <Element
              tittle={intl.formatMessage({ id: "properties.title.veggies" })}
              subtittle={intl.formatMessage({
                id: "properties.subtitle.amazing",
              })}
              style={{ backgroundColor: "#FF5C14" }}
              image={eggplant}
              description="Eggplant"
            />
            <Element
              tittle={intl.formatMessage({ id: "properties.title.probiotic" })}
              subtittle={intl.formatMessage({
                id: "properties.subtitle.fiber",
              })}
              style={{ backgroundColor: "#008BBF" }}
              image={broccoli}
              description="Broccoli"
            />
            <Element
              tittle={intl.formatMessage({ id: "properties.title.delicius" })}
              subtittle={intl.formatMessage({
                id: "properties.subtitle.texture",
              })}
              style={{ backgroundColor: "#008BBF" }}
              image={burger}
              description="Burger"
            />
            <Element
              tittle={intl.formatMessage({ id: "properties.title.free" })}
              subtittle={intl.formatMessage({
                id: "properties.subtitle.allergens",
              })}
              style={{ backgroundColor: "#FF5C14" }}
              image={peanut}
              description="Peanut"
            />
            <Element
              tittle={intl.formatMessage({ id: "properties.title.100" })}
              subtittle={intl.formatMessage({
                id: "properties.subtitle.vegan",
              })}
              style={{ backgroundColor: "#FFB600" }}
              image={leaves}
              description="Leaves"
            />
          </div>
        </div>
        <div className="flex justify-center p-2 lg:m-20">
          <div className="btn-contain w-60 h-12 flex justify-center">
            <Button
              description={intl.formatMessage({ id: "properties.button" })}
              className="bg-[#FFB600] hover:bg-[#FFD700]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Properties;
