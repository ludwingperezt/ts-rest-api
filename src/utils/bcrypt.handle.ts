import { hash, compare } from "bcryptjs"

const encrypt = async (plainPassword: string) => {
    // por lo general como salt se usa un número 8 o 10 para no afectar el performance
    const passwordHash = await hash(plainPassword, 8)
    return passwordHash
}

const verify = () => {

}

export {encrypt, verify}