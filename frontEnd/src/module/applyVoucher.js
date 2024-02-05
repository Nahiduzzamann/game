import axios from "axios"
import url from "./index"

const applyVoucher=async(d)=>{
    return axios.get(`${url}/rewards/voucher/apply/${d}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default applyVoucher

