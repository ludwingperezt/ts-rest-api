/**
 * Controllers dedicados al manejo de autenticación de usuarios.
 */

import { Request, Response } from "express"
import { registerNewUser, loginUser } from "../services/auth.service"

const registerController = async ({body}: Request, res: Response) => {
    const responseUser = await registerNewUser(body)
    res.send(responseUser)
}

const loginController = async ({ body }: Request, res: Response) => {
    const {email, password} = body
    const responseUser = await loginUser({email, password})

    // Esto es para estandarizar respuestas:
    if (responseUser === 'BAD_PASSWORD') {
        res.status(403)
        res.send(responseUser)
    }
    else {
        res.send(responseUser)
    }
}

export { loginController, registerController}