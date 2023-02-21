import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage";

/**
 * Registrar la subida de un archivo en la db.
 * @param param0 Re
 * @returns 
 */
const registerUpload = async ({fileName, idUser, path}: Storage) => {
    const responseItem = await StorageModel.create({fileName, idUser, path})
    return responseItem
}

export {registerUpload}