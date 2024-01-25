import axios from "axios"
import url from "./index"

const getUserWallet=async()=>{
    return axios.get(`${url}/balance/user/wallet/get`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getUserWallet

