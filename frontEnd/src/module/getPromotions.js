import axios from "axios"
import url from "./index"

const getPromotions=async(applicable)=>{
    return axios.get(`${url}/balance/promotion/get${applicable?"?applicable=true":""}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
}
export default getPromotions

