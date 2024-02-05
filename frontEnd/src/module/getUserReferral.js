import axios from "axios"
import url from "./index"

const getUserRefeeeal=async()=>{
    return axios.get(`${url}/rewards/rewards/user/get`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getUserRefeeeal

