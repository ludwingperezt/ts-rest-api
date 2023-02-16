/**
 * Los controladores hacen la orquestación entre la infraestructura y la lógica de negocio.
 * 
 * El controlador solo maneja el request y debe responder. El controlador no debe ejecutar 
 * lógica de negocio. El controlador solo recibe datos y responde.
 */
import { Request, Response } from "express"
import { insertItem } from "../services/item.service"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "Error_get_item", e)
    }
}

const getItems = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "Error_get_items")
    }
}

const updateItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "Error_update_item")
    }
}

const postItem = async ({body}: Request, res: Response) => {
    try {
        const responseItem = await insertItem(body)
        res.send(responseItem)

    } catch (e) {
        handleHttp(res, "Error_post_item", e)
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, "Error_delete_item")
    }
}

export {getItem, getItems, postItem, updateItem, deleteItem}