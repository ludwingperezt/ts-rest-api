import { Router } from "express";
import { readdirSync } from "fs"

const PATH_ROUTER = `${__dirname}` // Ruta del directorio actual

const router = Router()

const cleanFileName = (fileName:string) => {
    const file = fileName.split('.').shift()
    return file
}

// Escanear los archivos que existen dentro del directorio actual
// Esto se hace para tener como prefijo de las rutas, el nombre del archivo
// correspondiente.
// Este es un cargador dinamico, es decir que solo hace falta declarar en la carpeta
// routes/ el archivo con el nombre de las rutas a declarar y automaticamente se van
// a importar aquí usando como prefijo de las rutas el nombre del archivo correspondiente
readdirSync(PATH_ROUTER).filter((fileName) => {

    const cleanName = cleanFileName(fileName)

    if (cleanName !== "index") {
        // Esto se llama importación dinámica y es una característica de typescript
        import(`./${cleanName}`).then((moduleRouter) => {
            // moduleRouter es el router exportado en la ruta
            console.log(`...cargando las rutas /${cleanName} del archivo ${fileName}`)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

export { router }