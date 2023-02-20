/**
 * Este controlador solo sirve de ejemplo para proteger rutas.
 * 
 */
import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import {listOrders} from "../services/order.service"
import { RequestExt } from "../interfaces/requestext.interface"

const getOrders = async (req: RequestExt, res: Response) => {
    try {
        console.log('Esta es la data del usuario enviada por el middleware', req.user)
        const data = listOrders()
        res.send(data)
    } catch (e) {
        handleHttp(res, "Error_get_order", e)
    }
}

export {getOrders}