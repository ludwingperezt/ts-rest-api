/**
 * Aqui se definen las características del tipo de dato Car.
 */
export interface Car {
    name: string
    color: string
    gas: 'gasoline'|'electric'
    year: string
    description: string
    price: number
}