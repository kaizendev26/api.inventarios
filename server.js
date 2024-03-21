const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: "fl0user",
  host: "ep-plain-tree-a1i4fvp8.ap-southeast-1.aws.neon.fl0.io",
  database: "restaurante-inventarios",
  password: "gbCIKM1uo5zN",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
    sslmode: "require",
  },
});

// Rutas de la API
app.get("/productos", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM producto");
    const productos = result.rows;
    client.release();
    res.json(productos);
  } catch (err) {
    console.error("Error en la consulta", err);
    res.status(500).send("Error en el servidor");
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
