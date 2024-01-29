import { GameList } from "./gameDataTypes"

export interface UserModel {
    name: string, // String is shorthand for {type: String}
    password: string,
    username: string,
    phone: number,
    date: Date,
    balance: number
}
export interface GameHistory {
    _id: string,
    bet: number,
    win: number,
    date: Date,
    username: string,
    gameId: string,
    id: number,
    game:GameList
}
export interface WalletsTypes {
    _id: string
    methodName: string,
    icon: string,
    slogan: string,
    walletNumber: string,
}
export interface UserWalletsTypes {
    walletNumber: string,
    walletId: string,
    channel: string,
    userId: string,
    wallet:WalletsTypes
}