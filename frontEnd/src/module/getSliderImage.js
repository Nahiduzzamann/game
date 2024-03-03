import axios from "axios"
import url from "./index"

const getSliderImage=async()=>{
    return axios.get(`${url}/admin/get-slider`)
}
export default getSliderImage

