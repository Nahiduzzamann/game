import axios from "axios";
import url from "./url";

const getSliders = async () => {
  return axios.get(
    `${url}/admin/get-slider`);
};
export default getSliders;
