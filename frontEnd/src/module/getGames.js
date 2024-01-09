import axios from "axios"

const gateGame=async(url,id,system)=>{
    return axios.get(`${url}/games/${id}/${system}`)
}
export default gateGame