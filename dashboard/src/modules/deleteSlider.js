import axios from "axios";
import url from "./url";

const deleteSlider = async (id) => {
  return axios.delete(
    `${url}/delete-slider/${id}`);
};
export default deleteSlider;
