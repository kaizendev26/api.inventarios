import { Router } from "express";
import {
  obtenerInventario,
  agregarInventario,
  actualizarInventario,
} from "../controllers/inventario.controller.js";

const router = Router();

router.get("/inventario/:fecha", obtenerInventario);

router.post("/inventario", agregarInventario);

router.patch("/inventario", actualizarInventario);

export default router;
