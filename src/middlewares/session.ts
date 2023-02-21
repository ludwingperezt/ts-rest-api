/**
 * Este middleware se encargará de verificar si el usuario tiene una sesión activa.
 */

import { Request, Response, NextFunction } from "express";
import { RequestExt } from "../interfaces/requestext.interface";
import { verifyToken } from "../utils/jwt.handle";

/**
 * Middleware para verificar la sesión del usuario con el token JWT
 * 
 * @param req 
 * @param res 
 * @param next 
 */
const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        // obtener el encabezado de authorization
        const jwtByUser = req.headers.authorization || ''

        console.log({jwtByUser})

        // El encabezado recibido se parte donde aparece el espacio y se
        // obtiene el token el cual quedaría en la segunda posición
        // POr ejemplo, el header: "Bearer xyz" daría como resultado:
        // ["Bearer", "xyz"]
        const jwt = jwtByUser.split(' ').pop()

        // A la función verifyToken() se le manda una cadena generada con
        // template string porque el valor de jwt puede ser undefined en algun
        // momento y dicha función no acepta undefined, sino que solo acepta strings.
        const isUser = verifyToken(`${jwt}`)
        
        // Esto es lo que se hizo en el ejemplo para resolver el error de tipado
        // https://youtu.be/T1QFGwOnQxQ?t=8768
        // const isUser = verifyToken(`${jwt}`) as {id: string}

        if (!isUser) {
            res.status(401)
            res.send("Token not valid")
        }
        else {
            req.user = isUser
            next()
        }

    } catch (error) {
        console.error(error)
        res.status(400)
        res.send("SESSION_INVALID")
    }
}


export {checkJwt}