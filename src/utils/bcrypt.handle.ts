import { hash, compare } from "bcryptjs"

const encrypt = async (plainPassword: string) => {
    // por lo general como salt se usa un número 8 o 10 para no afectar el performance
    const passwordHash = await hash(plainPassword, 8)
    return passwordHash
}

/**
 * Verifica que una contraseña ingresada sea igual a una contraseña de referencia.
 * @param plainPassword 
 * @param passwordHash 
 * @returns 
 */
const verify = async (plainPassword:string, passwordHash:string) => {
    const isCorrect = await compare(plainPassword, passwordHash)

    return isCorrect
}

export {encrypt, verify}