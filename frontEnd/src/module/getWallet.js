import axios from "axios"
import url from "./index"

const getWallet=async()=>{
    return axios.get(`${url}/balance/wallet/get`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getWallet

