import { Notification } from "../connections/databaseConnection"
export const DATATYPES=["DEPOSIT", "WITHDRAW", "VOUCHER","REWARDS","TURNOVER"]
export const sendNotificationToUser=async(title:string,body:string,username:string,type:string)=>{
    return await Notification.create({
        title,
        details:body,
        receiverId:username,
        type:type
    })
}
export const sendNotificationToAdmin=async(title:string,body:string,senderUserName:string,type:string)=>{
    return await Notification.create({
        title,
        details:body,
        userId:senderUserName,
        type:type
    })
}