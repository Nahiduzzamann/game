
import axios from "axios"
import url from "./index"

const getNotificationCount=async()=>{
    return axios.get(`${url}/admin/message/user/count`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getNotificationCount

