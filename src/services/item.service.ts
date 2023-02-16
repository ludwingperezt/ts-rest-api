/**
 * Aquí se define la lógica de negocio
 */

import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item"

const insertCar = async (item:Car) => {
    const responseInsert = await ItemModel.create(item)
    return responseInsert
}

const getCars = async () => {
    const responseItem = await ItemModel.find({})
    return responseItem
}

const getCar = async (id:string) => {
    const responseItem = await ItemModel.findOne({_id: id})
    return responseItem
}

const updateCar = async (id:string, data:Car) => {
    // La función findOneAndUpdate busca en la colección el objeto según la query
    // especificada y si lo encuentra lo actualiza con la data del segundo parámetro
    const responseItem = await ItemModel.findOneAndUpdate({_id: id}, data, 
        {
            new:true // Esta configuración indica que el objeto obtenido como respuesta a la llamada a la función findOneAndUpdate() es el objeto actualizado
        })
    return responseItem
}

const deleteCar = async (id:string) => {
    
}

export { insertCar, getCars, getCar, updateCar, deleteCar }