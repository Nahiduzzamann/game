import axios from "axios"
import url from "./index"

const getWallet=async(depositChannel)=>{
    return axios.get(`${url}/balance/wallet/get?depositChannel=${depositChannel}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getWallet

