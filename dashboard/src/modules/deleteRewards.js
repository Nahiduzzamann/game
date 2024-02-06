import axios from "axios";
import url from "./url";

const deleteRewards = async (rewardId) => {
  return axios.delete(
    `${url}/rewards/rewards/delete/${rewardId}`);
};
export default deleteRewards;
