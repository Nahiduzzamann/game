import axios from "axios"
import url from "./index"

const getUserTurnoverBonus=async()=>{
    return axios.get(`${url}/balance/turnover/bonus`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getUserTurnoverBonus

