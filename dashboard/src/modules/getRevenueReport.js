import axios from "axios"
import url from "./url"


const getRevenueReport=async()=>{
    return axios.get(`${url}/admin/revenue/report`)
}
export default getRevenueReport

