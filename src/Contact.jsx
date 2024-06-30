import Loader from "./Loader";
import Message from "./Message";
import { useForm } from "./hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  //mayusculas y minusculas
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  //email
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  //245 caracteres
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es Incorrecto";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto a tratar' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};
let border = "";

function Contact() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <>
      <section id="contact" className="Contact lg:p-10 flex justify-center">
        <div className="Contact-contain bg-[#F5F5F5] rounded-lg w-4/5 md:w-3/5 lg:w-1/2 h-fit my-16">
          <div className="contain-inter p-6">
            <div className="tittle-contain text-center">
              <h2 className="tittle lg:text-4xl md:text-4xl text-2xl font-bold text-blue-600 p-2 lg:p-12">
                CONTACT US
              </h2>
            </div>
            <div className="form-contain ">
              <form
                onSubmit={handleSubmit}
                className="text-black flex flex-col gap-6 items-center p-6"
                action="https://formsubmit.co/susanaromero040800@email.com"
                method="POST"
              >
                <div className="input-contain w-full">
                  <input
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className={`p-4 rounded-lg text-black w-full
                                        ${
                                          errors.name
                                            ? "border-[#DD1D1D] border border-2 font-sans shadow-rose-600 "
                                            : "border border-gray-300"
                                        }`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                  />
                  {errors.name && (
                    <p style={styles} className="text-xs py-2 text-[#DD1D1D]">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="input-contain w-full">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className={`p-4 rounded-lg text-black w-full
                                        ${
                                          errors.email
                                            ? "border-[#DD1D1D] border border-2 font-sans shadow-rose-600"
                                            : "border border-gray-300"
                                        }`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.email}
                    required
                  />
                  {errors.email && (
                    <p style={styles} className="text-xs py-2 text-[#DD1D1D]">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="input-contain w-full">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    size="100"
                    placeholder="Subject"
                    className="p-4 rounded-lg text-black w-full border border-gray-300"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.subject}
                    required
                  />
                </div>
                <div className="input-contain w-full">
                  <textarea
                    name="comments"
                    placeholder="Add a message"
                    cols="50"
                    rows="5"
                    className={`p-4 rounded-lg text-black w-full resize-none
                                        ${
                                          errors.comments
                                            ? "border-[#DD1D1D] border border-2 font-sans shadow-rose-600"
                                            : "border border-gray-300 "
                                        }`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.comments}
                    required
                  ></textarea>
                  {errors.comments && (
                    <p style={styles} className="text-xs py-2 text-[#DD1D1D]">
                      {errors.comments}
                    </p>
                  )}
                </div>
                <div className="input-contain w-full flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-blue-400 text-white font-bold rounded-lg w-48 h-12 cursor-pointer flex items-center justify-center"
                  >
                    {loading ? <Loader /> : "Submit"}
                  </button>
                </div>
                {response && (
                  <Message
                    msg="Los datos han sido enviados"
                    bgColor="#198754"
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
