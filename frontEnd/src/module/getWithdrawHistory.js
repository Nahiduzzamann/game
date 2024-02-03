import axios from "axios"
import url from "./index"

const getWithdrawHistory=async()=>{
    return axios.get(`${url}/balance/withdraw-history`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getWithdrawHistory

