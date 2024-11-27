const pool = require("../db");

const getAllCategory = async (req, res, next) => {
  try {
    const AllCategory = await pool.query("SELECT * FROM tb_category");
    console.log(AllCategory);
    res.json(AllCategory.rows);
  } catch (error) {
    next(error);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM tb_category WHERE id=$1", [
      id,
    ]);
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Category not Found",
      });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createCategory = async (req, res, next) => {
  const { name_category } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO tb_category (name_category) VALUES ($1) RETURNING *",
      [name_category]
    );

    console.log(result);

    res.send(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM tb_category WHERE id=$1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0)
      return res.status(404).json({
        message: "Category not found",
      });

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name_category } = req.body;

    const result = await pool.query(
      "UPDATE tb_category SET name_category = $1 WHERE id = $2 RETURNING *",
      [name_category, id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Category not found",
      });

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategory,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
};
