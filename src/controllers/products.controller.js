const pool = require("../db");

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await pool.query(
      "SELECT p.id, p.plate_pd, p.price_pd, p.img_pd, p.stock_pd, c.name_category AS category_name FROM tb_product p JOIN tb_category c ON p.id_category = c.id"
    );
    console.log(allProducts);
    res.json(allProducts.rows);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `
      SELECT 
        p.id, p.plate_pd, p.price_pd, p.img_pd, p.stock_pd, 
        c.name_category AS category_name 
        FROM tb_product p
        JOIN tb_category c ON p.id_category = c.id
        WHERE p.id = $1
    `,
      [id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Product not Found",
      });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  const { plate_pd, price_pd, stock_pd, id_category } = req.body;
  const img_pd = req.file ? req.file.path : null;

  try {
    const cleanPlate = plate_pd.trim();
    const categoryCheck = await pool.query(
      "SELECT * FROM tb_category WHERE id=$1",
      [id_category]
    );
    if (categoryCheck.rows.length === 0) {
      return res.status(400).json({ message: "Category not found" });
    }
    const result = await pool.query(
      "INSERT INTO tb_product (plate_pd, price_pd, img_pd, stock_pd, id_category) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [plate_pd.trim(), price_pd, img_pd, stock_pd, id_category]
    );

    console.log(result);

    res.send(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM tb_product WHERE id=$1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0)
      return res.status(404).json({
        message: "Product not found",
      });

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { plate_pd, price_pd, stock_pd, id_category } = req.body;
    const img_pd = req.file ? req.file.path : null;

    const result = await pool.query(
      "UPDATE tb_product SET plate_pd = $1, price_pd = $2, img_pd = $3, stock_pd = $4, id_category = $5 WHERE id = $6 RETURNING *",
      [plate_pd, price_pd, img_pd, stock_pd, id_category, id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Product not found",
      });

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
