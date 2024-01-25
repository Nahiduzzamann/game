import axios from "axios"
import url from "./index"

const getDeposits=async()=>{
    return axios.get(`${url}/balance/deposit/get`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getDeposits

