import { io } from ".."
import { Notification } from "../connections/databaseConnection"
export const DATATYPES = ["DEPOSIT", "WITHDRAW", "VOUCHER", "REWARDS", "TURNOVER"]
export const sendNotificationToUser = async (title: string, body: string, username: string, type: string) => {

    const data = await Notification.create({
        title,
        details: body,
        receiverId: username,
        type: type
    })
    io.emit("notification", data)
    return data
}
export const sendNotificationToAdmin = async (title: string, body: string, senderUserName: string, type: string) => {
    const data = await Notification.create({
        title,
        details: body,
        userId: senderUserName,
        type: type
    })
    io.emit("notification", data)
    return data
}
export const getNotificationSocketAdmin = async () => {
    return await Notification.aggregate([
        { $match: { userId: { $ne: null } } },
        {
            $lookup: {
                from: "users",
                let: { userIdObj: "$userId" },
                pipeline: [
                    {
                        $match: {
                            $expr: { $eq: ["$username", "$$userIdObj"] },
                        },
                    },
                ],
                as: "user",
            },
        },
        {
            $addFields: {
                user: { $arrayElemAt: ["$user", 0] },
            },
        },
    ]).sort({ date: -1 })
}
export const getUnreadNotificationCountSocket = async () => {

    return await Notification.countDocuments({ userId: { $ne: null }, read: false })
}
export const getNotificationUserSocket = async (username:string) => {
   return  await Notification.aggregate([
    { $match: { receiverId: username } },
    {
        $lookup: {
            from: "users",
            let: { userIdObj: "$receiverId" },
            pipeline: [
                {
                    $match: {
                        $expr: { $eq: ["$username", "$$userIdObj"] },
                    },
                },
            ],
            as: "user",
        },
    },
    {
        $addFields: {
            user: { $arrayElemAt: ["$user", 0] },
        },
    },
]).sort({ date: -1 })
}
export const getUnreadNotificationCountUserSocket = async (username:string) => {
  return await Notification.countDocuments({ receiverId: username, read: false })
}