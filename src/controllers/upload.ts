/**
 * Controller para subir archivos
 */

import { handleHttp } from "../utils/error.handle"
import { Request, Response } from "express"
import { RequestExt } from "../interfaces/requestext.interface"
import { registerUpload } from "../services/storage"
import { Storage } from "../interfaces/storage.interface"

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const {user, file} = req
        let userId = ''

        // Aqui se pueden hacer las validaciones de archivo con el uso de file.

        // Este if es un workaround porque el objeto "user" que viene en el
        // request puede ser un string o un JwtPayload. Si es un string entonces
        // es el ID del usuario que hace la petición. Si es un JwtPayload entonces
        // lo que se recibe es un objeto que tiene un elemento "id" que es el ID
        // del usuario.
        if (typeof user === "string") {
            userId = user
        }
        else {
            // User es un JwtPayload
            userId = `${user?.id}`
        }

        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${userId}`,
            path: `${file?.path}`
        }
        const response = await registerUpload(dataToRegister)

        res.send(response)
    } catch (error) {
        handleHttp(res, "Error_get_file", error)
    }
}

export {getFile}