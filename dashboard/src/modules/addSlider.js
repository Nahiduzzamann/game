import axios from "axios";
import url from "./url";

const addSlider = async (file) => {
    const formData=new FormData()
    formData.append("image",file)
  return axios.post(
    `${url}/add-slider`,formData);
};
export default addSlider;
