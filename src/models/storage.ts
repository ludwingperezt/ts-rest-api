import { Schema, Types, model, Model } from "mongoose"
import { Storage } from "../interfaces/storage.interface"

const StorageSchema = new Schema<Storage>(
    {
        fileName: {
            type: String
        },
        idUser: {
            type: String
        },
        path: {
            type: String
        }
    }, 
    {
        timestamps: true, // que se creen los campos de fecha de creación y actualización para el dato
        versionKey: false // que no se guarden las versiones del objeto
    })


const StorageModel = model("storage", StorageSchema)

export default StorageModel
