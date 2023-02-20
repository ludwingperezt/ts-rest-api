/**
 * Las rutas de /orders solo son de ejemplo de protección de rutas.
 * 
 * A estas rutas solo pueden acceder los usuarios con un JWT válido.
 * 
 * La validación se hace con un middleware
 */

import { Router } from "express"
import { getOrders } from "../controllers/order"
import { checkJwt } from "../middlewares/session"

const router = Router()

router.get('/', checkJwt, getOrders)

export { router }