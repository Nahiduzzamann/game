import axios from "axios"
import url from "./url"

const getAdminWallet=async()=>{
    return axios.get(`${url}/balance/wallet/get`)
}
export default getAdminWallet