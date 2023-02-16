/**
 * En este archivo se definen las rutas para las rutas de los objetos de dominio "items"
 */

import { Router } from "express"
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item"
import { logMiddleware } from "../middlewares/log"

const router = Router()

router.get('/', getItems)
router.post('/', postItem)
router.get('/:id', logMiddleware, getItem) // Aqui se muestra un ejemplo de cómo usar un middleware
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

export { router }