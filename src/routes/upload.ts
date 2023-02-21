import { Router } from "express";
import { getFile } from "../controllers/upload";
import multerMiddleware from "../middlewares/file"
import { checkJwt } from "../middlewares/session";

const router = Router();

// Esta ruta pasa por dos middlewares:
// - El primero es para la sesión
// - El segundo es para obtener el archivo
//      En este caso si solo se espera un archivo entonces se usa .single y
//      dentro va el nombre del campo bajo el cual se espera el archivo.
//      Si lo que se quiere son varios archivos entonces se usa .array
router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile)

export {router}