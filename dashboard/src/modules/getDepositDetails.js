import axios from "axios"
import url from "./url"


const getDepositeDetails=async()=>{
    return axios.get(`${url}/admin/deposit/all`)
}
export default getDepositeDetails

