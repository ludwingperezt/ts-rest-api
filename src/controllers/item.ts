/**
 * Los controladores hacen la orquestación entre la infraestructura y la lógica de negocio.
 * 
 * El controlador solo maneja el request y debe responder. El controlador no debe ejecutar 
 * lógica de negocio. El controlador solo recibe datos y responde.
 */
import { Request, Response } from "express"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service"
import { handleHttp } from "../utils/error.handle"

const getItem = async ({params}: Request, res: Response) => {
    try {
        const { id } = params
        const response = await getCar(id)
        const data = response ? response : "NOT_FOUND"
        res.send(data)
    } catch (e) {
        handleHttp(res, "Error_get_item", e)
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars()
        res.send(response)
    } catch (e) {
        handleHttp(res, "Error_get_items", e)
    }
}

const updateItem = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await updateCar(id, body)
        res.send(response)
    } catch (e) {
        handleHttp(res, "Error_update_item", e)
    }
}

const postItem = async ({body}: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.send(responseItem)

    } catch (e) {
        handleHttp(res, "Error_post_item", e)
    }
}

const deleteItem =  async({params}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await deleteCar(id)
        res.send(response)
    } catch (e) {
        handleHttp(res, "Error_delete_item", e)
    }
}

export {getItem, getItems, postItem, updateItem, deleteItem}