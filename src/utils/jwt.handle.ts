/**
 * Archivo que genera y verifica las firmas JWT
 */
import {sign, verify} from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "😱😱😱😱"

/**
 * Aqui se genera el token JWT
 * @param id 
 * @returns 
 */
const generateToken = (id:string) => {
    // 
    const jwt = sign({id}, JWT_SECRET, {
        expiresIn: "2h"
    })

    return jwt
}

/**
 * En esta función se verifica que el token JWT sea válido.
 * 
 * @param jwt 
 * @returns 
 */
const verifyToken = (jwt: string) => {
    const verifiedData = verify(jwt, JWT_SECRET)
    return verifiedData
}

export {generateToken, verifyToken}