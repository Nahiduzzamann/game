import axios from "axios"
import url from "./index"

const gateGameById=async(id)=>{
    return axios.get(`${url}/games/url/${id}`)
}
export default gateGameById