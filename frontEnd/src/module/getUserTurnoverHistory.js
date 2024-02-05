import axios from "axios"
import url from "./index"

const getUserTurnoverHistory=async()=>{
    return axios.get(`${url}/balance/turnover/history`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getUserTurnoverHistory

