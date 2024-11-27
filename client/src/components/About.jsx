import { useIntl } from "react-intl";
import Button from "./Button";
import image2 from "/image2.png";
function About() {
  const intl = useIntl();

  return (
    <>
      <section
        id="about"
        className="About lg:p-10 flex flex-wrap justify-around items-center md:m-4"
      >
        {/* Container Imagen Mitad Pantalla */}
        <div className="image-contain w-96 h-auto my-20 md:m-0 lg:m-0">
          <img src={image2} className=" max-w-96 w-full max-h-96" />
        </div>
        {/* Container Card About Mitad Pantalla*/}
        <div className="About-contain w-96 flex flex-col items-center text-center gap-6 bg-gray-500 rounded-lg p-10">
          {/* Container Seccion Encabezado */}
          <div className="encabezado">
            {/* Container Titulo */}
            <div className="about-tittle text-center p-2 lg:p-6">
              <h2 className="tittle lg:text-4xl md:text-4xl text-2xl font-bold">
                {intl.formatMessage({ id: "about.title" })}
              </h2>
              <p className="tittle-description lg:text-xl">
                {intl.formatMessage({ id: "about.description" })}
              </p>
            </div>
            {/* Container Icons */}
            <div className="icons-contain flex justify-center gap-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
          </div>
          {/* Container Seccion Horas */}
          <div className="about-hours-contain">
            <h3 className="font-bold">
              {intl.formatMessage({ id: "about.hour" })}
            </h3>
            <ul>
              <li>{`${intl.formatMessage({
                id: "about.monday",
              })} - 12pm - 9pm `}</li>
              <li>{`${intl.formatMessage({
                id: "about.tuesday",
              })} - 12pm - 9pm `}</li>
              <li>{`${intl.formatMessage({
                id: "about.wednesday",
              })} - 12pm - 10pm `}</li>
              <li>{`${intl.formatMessage({
                id: "about.thursday",
              })} - 12pm - 10pm `}</li>
              <li>{`${intl.formatMessage({
                id: "about.friday",
              })} - 12pm - 10pm `}</li>
              <li>{`${intl.formatMessage({
                id: "about.saturday",
              })} - 12pm - 10pm `}</li>
              <li>{`${intl.formatMessage({
                id: "about.sunday",
              })} - 12pm - 10pm `}</li>
            </ul>
          </div>
          {/* Container Seccion Telefonos */}
          <div className="about-phone-contain">
            <h3 className="font-bold">
              {intl.formatMessage({ id: "about.phone" })}
            </h3>
            <ul>
              <li>212.260.1212</li>
              <li>212.260.7049</li>
            </ul>
          </div>
          {/* Container Seccion Boton */}
          <div className="btn-contain w-full h-12 m-6">
            <Button
              description={intl.formatMessage({ id: "about.button" })}
              className="bg-[#FFB600] hover:bg-[#FFD700]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
