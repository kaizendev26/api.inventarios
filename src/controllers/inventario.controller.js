import { pool } from "../db.js";

export const obtenerInventario = async (req, res) => {
  try {
    const fecha = req.params?.fecha;
    const [rows] = await pool.query("call obtenerInventarioPorFecha(?)", fecha);
    console.log(rows);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const agregarInventario = async (req, res) => {
  const { idProducto, cantidadActual, ventaDelDia, fecha } = req.body;

  try {
    const [rows] = await pool.query("call agregarInventario(?,?,?,?,?)", [
      idProducto,
      cantidadActual,
      ventaDelDia,
      fecha,
      null,
    ]);
    if (rows.affectedRows <= 0) return res.status(404).json({ message: 0 });

    res.send({
      response: rows.affectedRows,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const actualizarInventario = async (req, res) => {
  const { idInventario, cantidadActual, ventaDelDia } = req.body;

  try {
    const [rows] = await pool.query("call actualizarInventario(?,?,?,?)", [
      idInventario,
      cantidadActual,
      ventaDelDia,
      null,
    ]);
    if (rows.affectedRows <= 0) return res.status(404).json({ message: 0 });

    res.send({
      response: rows.affectedRows,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
