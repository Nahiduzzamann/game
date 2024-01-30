import axios from "axios"
import url from "./url"


const getDeposite=async()=>{
    return axios.get(`${url}/admin/deposit/report`)
}
export default getDeposite

