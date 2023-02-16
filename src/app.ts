/**
 * Archivo principal de la aplicación.
 */

import "dotenv/config"
import express from "express"
import cors from "cors"
import {router} from "./routes"
import db from "./config/mongo"

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors()) // Por ahora se deja asi para que se pueda acceder a la api desde cualquier origen

app.use(express.json()) // Aqui se indica que la app puede recibir datos en formato json en el body

app.use(router)

// INiciar la conexion con la db:
db().then(() => console.log("Conexion lista con la db..."))

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`))