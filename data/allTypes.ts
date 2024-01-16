export interface UserModel {
    name: string, // String is shorthand for {type: String}
    password: string,
    username: string,
    phone: number,
    date: Date,
    balance: number
}