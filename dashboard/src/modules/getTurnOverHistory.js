import axios from "axios"
import url from "./url"


const getTurnOverHistory=async()=>{
    return axios.get(`${url}/admin/deposit/turnover`)
}
export default getTurnOverHistory

