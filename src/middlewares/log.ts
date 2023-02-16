/**
 * Un middleware es una función que "vigila" las peticiones entrantes y por medio de la
 * cual se puede realizar alguna acción, por ejemplo validaciones o autenticación o logging.
 * 
 * Desde un middleware es posible modificar el flujo y respuesta de una petición.
 * 
 * Un middleware siempre tendrá tres parámetros:
 * - La petición (Request)
 * - La respuesta (Response)
 * - La función a ejecutar si la petición se acepta (next function)
 */

import { NextFunction, Request, Response } from "express"

/**
 * Este es un middleware para ejemplificar cómo funcionan estos componentes.
 * 
 * @param req El Request es el objeto que trae toda la información de cada solicitud
 * @param res El Response es el objeto que ayuda a responder las peticiones.
 * @param next Esta es una función en la que se indica si la petición continua o no.
 */
const logMiddleware = (req:Request, res: Response, next: NextFunction) => {
    console.log("Hola!, soy el middleware de log")

    const header = req.headers
    const userAgent = header["user-agent"]
    console.log("user-agent", userAgent)

    // Es importante que en el middleware siempre se retorne algo.  Si la petición es
    // aceptada entonces el flujo debe continuar normal, indicado con la invocación a
    // next()
    // Pero si el flujo debe interrumpirse, entonces lo recomendado es que se envíe una
    // respuesta directamente desde el middleware sin llegar al controlador, así:
    // res.send("ALGUNA RESPUESTA")
    next()
}

export {logMiddleware}