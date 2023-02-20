/**
 * Servicio para lógica de negocio del manejo de autenticación
 */
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt } from "../utils/bcrypt.handle"

const registerNewUser = async ({email, password, name}: User) => {
    const checkExists = await UserModel.findOne({email})

    if (checkExists) return "USER_EXISTS"

    // Si el usuario no existe, se registra
    const hashPass = await encrypt(password)
    const registeredUser = await UserModel.create({email, password:hashPass, name})

    return registeredUser
}

const loginUser = async () => {

}

export {registerNewUser, loginUser}