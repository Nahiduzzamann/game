import axios from "axios"
import url from "./index"

const getRewardsHistory=async()=>{
    return axios.get(`${url}/rewards/rewards/user/history`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getRewardsHistory

