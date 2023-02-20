/**
 * Controllers dedicados al manejo de autenticación de usuarios.
 */

import { Request, Response } from "express"
import { registerNewUser, loginUser } from "../services/auth.service"

const registerController = async ({body}: Request, res: Response) => {
    const responseUser = await registerNewUser(body)
    res.send(responseUser)
}

const loginController = async (req: Request, res: Response) => {
    
}

export { loginController, registerController}