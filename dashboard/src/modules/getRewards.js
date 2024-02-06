import axios from "axios";
import url from "./url";

const getRewards = async () => {
  return axios.get(
    `${url}/rewards/rewards/get`);
};
export default getRewards;
