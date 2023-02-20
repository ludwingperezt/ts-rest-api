import { Schema, Types, model, Model } from "mongoose"
import { User } from "../interfaces/user.interface"

const UserSchema = new Schema<User>(
    {
        name: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        description: { type: String, default:"description" }
    }, 
    {
        timestamps: true, // que se creen los campos de fecha de creación y actualización para el dato
        versionKey: false // que no se guarden las versiones del objeto
    })

const UserModel = model("users", UserSchema)

export default UserModel
