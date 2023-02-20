/**
 * Rutas especificas de autenticación
 */

import { Router } from "express"
import { registerController, loginController } from "../controllers/auth"

const router = Router()

// Ruta para hacer sign-up
router.post('/register', registerController)

// Ruta para hacer login
router.post('/login', loginController)

export { router }