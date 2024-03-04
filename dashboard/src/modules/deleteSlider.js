import axios from "axios";
import url from "./url";

const deleteSlider = async (id) => {
  return axios.delete(
    `${url}/admin/delete-slider/${id}`);
};
export default deleteSlider;
