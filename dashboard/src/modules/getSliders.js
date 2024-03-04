import axios from "axios";
import url from "./url";

const getSliders = async () => {
  return axios.delete(
    `${url}/get-slider`);
};
export default getSliders;
