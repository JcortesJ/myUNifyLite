import { pool } from "../../../config/db2";

export default async function handler(req:any, res:any) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProducts = async (req:any, res:any) => {
  try {
    const [result] = await pool.query("SELECT * FROM EVENTO");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req:any, res:any) => {
  try {
    const { name, description, price } = req.body;

    const result = await pool.query("INSERT INTO product SET ?", {
      name,
      description,
      price,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};