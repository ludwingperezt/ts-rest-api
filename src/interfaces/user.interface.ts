/**
 * Esta interfaz deriva de la interfaz existente Auth para agregarle otros campos.
 */

import { Auth } from "./auth.interface";

export interface User extends Auth {
    name: string
    description: string
}