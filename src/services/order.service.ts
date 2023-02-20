
import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item"

const listOrders = () => {
    const data = {
        'data': "Esto solo lo pueden ver usuarios con JWT valido"
    }
    return data
}

export {listOrders}