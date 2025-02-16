import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const [product, setProduct] = useState({
    plate_pd: "",
    price_pd: null,
    img_pd: null,
    stock_pd: null,
    id_category: null,
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [save, setSave] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  // Cargar las categorías al montar el componente
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("http://localhost:4000/category");
      const data = await res.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    //Formato para que acepte otros tipos
    try {
      const formData = new FormData();
      for (const key in product) {
        if (typeof product[key] === "string") {
          formData.append(key, product[key].trim()); // Elimina espacios en blanco
        } else {
          formData.append(key, product[key]);
        }
      }

      if (editing) {
        await fetch(`http://localhost:4000/products/${params.id}`, {
          method: "PUT",
          body: formData,
        });
      } else {
        const res = await fetch("http://localhost:4000/products", {
          method: "POST",
          body: formData,
        });
        if (!res.ok) {
          throw new Error("Error en la solicitud"); // Lanzar un error si la respuesta no es exitosa
        }
        const data = await res.json();
        console.log(data);
        setProduct({ ...product, img_url: data.img_pd });
      }
      setLoading(false);
      setSave(true);
    } catch (error) {
      console.log(error.message);
      setErrorMessage("Ha ocurrido un error al agregar el producto"); // Actualizar el mensaje de error
      setLoading(false);
      setSave(false);
    }
    //navigate("/");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    //Cambios en campo imagen
    if (name === "img_pd") {
      setProduct({ ...product, img_pd: files[0] });
    } else {
      //Cambios en campos de texto
      setProduct({ ...product, [name]: value });
    }
    setSave(false);
    setErrorMessage("");
  };

  const loadProduct = async (id) => {
    const res = await fetch(`http://localhost/4000/products/${id}`);
    const data = await res.json();
    setProduct({
      plate_pd: data.plate_pd,
      price_pd: data.price_pd,
      img_url: data.img_pd,
      stock_pd: data.stock_pd,
      id_category: data.id_category,
    });
    setEditing(true);
  };

  useEffect(() => {
    if (params.id) {
      loadProduct(params.id);
    }
  }, [params.id]);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="p-4">{editing ? "Edit Product" : "Create Product"}</h1>
        <div style={{ color: "black" }}>
          <form
            className="flex justify-between flex-col gap-4 w-80"
            onSubmit={handleSubmit}
          >
            <input
              className="p-4"
              type="text"
              name="plate_pd"
              onChange={handleChange}
              placeholder="Nombre de Producto"
            />
            <input
              className="p-4"
              type="text"
              name="price_pd"
              onChange={handleChange}
              placeholder="Precio"
            />
            <input
              className="p-4"
              type="file"
              name="img_pd"
              onChange={handleChange}
              placeholder="Url de Imagen"
            />
            <input
              className="p-4"
              type="text"
              name="stock_pd"
              onChange={handleChange}
              placeholder="Cantidad"
            />
            <select
              className="p-4"
              name="id_category"
              onChange={handleChange}
              value={product.id_category || ""}
            >
              <option value="" disabled>
                Selecciona una categoría
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name_category}
                </option>
              ))}
            </select>
            <input
              className="p-4 bg-slate-700 border"
              type="submit"
              value="Save"
            />
            {errorMessage && (
              <div className="bg-red-500">
                <p>{errorMessage}</p>
              </div>
            )}
            {save && (
              <div className="bg-green-500">
                <p>Producto Agregado Correctamente</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
