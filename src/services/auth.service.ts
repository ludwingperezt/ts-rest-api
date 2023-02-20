/**
 * Servicio para lógica de negocio del manejo de autenticación
 */
import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verify } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const registerNewUser = async ({email, password, name}: User) => {
    const checkExists = await UserModel.findOne({email})

    if (checkExists) return "USER_EXISTS"

    // Si el usuario no existe, se registra
    const hashPass = await encrypt(password)
    const registeredUser = await UserModel.create({email, password:hashPass, name})

    return registeredUser
}

/**
 * Servicio para hacer login
 * @param param0 
 * @returns 
 */
const loginUser = async ({email, password}: Auth) => {
    const userFound = await UserModel.findOne({email})

    if (!userFound) return "USER_NOT_EXISTS"

    const passwordHash = userFound.password

    const isCorrect = await verify(password, passwordHash)

    if (!isCorrect) return "BAD_PASSWORD"

    // En el payload del token JWT generado se envía el ID del usuario.
    const token = generateToken(userFound.id)

    const data = {
        token: token,
        user: userFound
    }

    return data
}

export {registerNewUser, loginUser}