import axios from "axios"
import url from "./index"

const gateGameById=async(id)=>{
    return axios.get(`${url}/games/${id}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default gateGameById