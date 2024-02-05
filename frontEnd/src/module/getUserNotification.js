import axios from "axios"
import url from "./index"

const getUserNotification=async()=>{
    return axios.get(`${url}/admin/message/user/get`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getUserNotification

