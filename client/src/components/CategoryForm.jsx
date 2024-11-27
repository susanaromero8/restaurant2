import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryForm = () => {
  const [category, setCategory] = useState({
    name_category: "",
  });

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //console.log("subiendo");
    if (editing) {
      await fetch(`http://localhost:4000/category/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(category), //objeto a string
        headers: { "Content-Type": "application/json" }, // sepa que es objeto json
      });
    } else {
      const res = await fetch("http://localhost:4000/category", {
        method: "POST",
        body: JSON.stringify(category), //objeto a string
        headers: { "Content-Type": "application/json" }, // sepa que es objeto json
      });
      const data = await res.json();
      console.log(data);
    }
    setLoading(false);
    navigate("/");
  };

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const loadCategory = async (id) => {
    const res = await fetch(`http://localhost/4000/category/${id}`);
    const data = await res.json();
    setCategory({
      name_category: data.name_category,
    });
    setEditing(true);
  };

  useEffect(() => {
    if (params.id) {
      loadCategory(params.id);
    }
  }, [params.id]);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="p-4">{editing ? "Edit Category" : "Category"}</h1>
        <div style={{ color: "black" }}>
          <form
            className="flex justify-between flex-col gap-4 w-80"
            onSubmit={handleSubmit}
          >
            <input
              className="p-4"
              type="text"
              name="name_category"
              onChange={handleChange}
              placeholder="Nombre de la Categoria"
            />
            <input
              className="p-4 bg-slate-700 border"
              type="submit"
              value="Save"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryForm;
