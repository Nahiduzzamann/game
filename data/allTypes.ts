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
    game: GameList
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
    wallet: WalletsTypes
}
export interface DepositTypes {
    walletId: string,
    amount: number,
    promotionId: string,
    date: Date,
    status: string,
    remarks: string,
    tranXId: string,
    userId: string
}
export interface UserTypes {
    name: string, // String is shorthand for {type: String}
    password: string,
    username: string,
    phone: string,
    date: Date,
    balance: number,
    save:()=>{}
}
export interface PromotionTypes {
    title: string,
    description: string,
    image: string,
    details: string,
    bonusPercentage: number,
    turnOverAmount: number,
    applicable: boolean
}