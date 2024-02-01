import axios from "axios"
import url from "./url"


const getWithdrawDetails=async()=>{
    return axios.get(`${url}/admin/withdraw/get`)
}
export default getWithdrawDetails

