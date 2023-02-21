Curso de referencia:
https://www.youtube.com/watch?v=T1QFGwOnQxQ

Instalar typescript de manera global:
npm i typescript -g

ts-node es un transpilador que se debe instalar de forma global:

npm i ts-node -g

nodemon se instala de manera global:
npm i nodemon -g


Inicia el proyecto typescript (crea el archivo tsconfig.js):
tsc --init

Inicia el proyecto de node:
npm init -y

Instalar los paquetes base:
- multer: es para cargar archivos
- express
- cors: para permitir el acceso a los endpoints desde diferentes origenes
- dotenv: para gestionar variables de entorno
- mongoose: ORM para mongodb

npm i express cors dotenv multer mongoose

Instalar los tipados para los paquetes base (-D indica que se instalan como dependencias de desarrollo):
npm i @types/express @types/cors @types/dotenv @types/multer @types/mongoose -D

En la carpeta src/ se crea la estructura de carpetas del proyecto


===============
Mongoose funciona con esquemas, que son representaciones de los datos que se van a almacenar en la base de datos.

===============

Se instalan los paquetes
- bcryptjs para el cifrado de contraseñas
- jsonwebtoken para generar tokens de autenticación

npm i bcryptjs jsonwebtoken

Y también se instalan los types de esas librerías:
npm i @types/bcryptjs @types/jsonwebtoken

===============

Para compilar:
1. Hay que especificar en el archivo tsconfig.json la carpeta de salida
    de la compilación en el elemento "outDir"
2. La compilación se hace con el comando
    tsc
    Pero puede especificarse en package.json un script para que lo haga.
3. Se debe agregar un comando para correr la aplicación.  Eso se hace en
    el archivo package.json, especificando un script específico para ello.