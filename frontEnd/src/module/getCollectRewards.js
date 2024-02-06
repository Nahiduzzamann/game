import axios from "axios"
import url from "./index"

const getCollectRewards=async(id)=>{
    return axios.get(`${url}/rewards/rewards/user/collect/${id}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getCollectRewards

