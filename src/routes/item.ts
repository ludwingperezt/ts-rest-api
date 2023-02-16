/**
 * En este archivo se definen las rutas para las rutas de los objetos de dominio "items"
 */

import { Router } from "express"
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item"

const router = Router()

router.get('/', getItems)
router.post('/', postItem)
router.get('/:id', getItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

export { router }