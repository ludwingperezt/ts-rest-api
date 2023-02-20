/**
 * Esta interfaz se creó para que dentro del middleware, al validar que un JWT es válido,
 * entonces dentro del objeto req (el Request) se debe enviar la data obtenida del payload
 * del token JWT para que sea accesible en el controller, sin embargo el tipo Request nativo
 * no tiene contemplada la propiedad "user" que es donde se colocaría la data, así que lo que se
 * hace es extender la interfaz de Request y agregarle como opcional el campo para almacenar la data
 * del usuario autenticado.
 * 
 */
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestExt extends Request {
    user?: string | JwtPayload
}
