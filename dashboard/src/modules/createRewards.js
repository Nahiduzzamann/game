import axios from "axios";
import url from "./url";

const createRewards = async (bonusAmount,level,targetAmount) => {
  return axios.post(
    `${url}/rewards/rewards/create`,{
        "bonusAmount":bonusAmount,
        "level":level,
        "targetTurnover":targetAmount
    });
};
export default createRewards;
