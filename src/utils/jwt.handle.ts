/**
 * Archivo que genera y verifica las firmas JWT
 */
import {sign, verify} from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "😱😱😱😱"

const generateToken = (id:string) => {
    // 
    const jwt = sign({id}, JWT_SECRET, {
        expiresIn: "2h"
    })

    return jwt
}

const verifyToken = async () => {

}

export {generateToken, verifyToken}