import axios from "axios";
import url from "./url";

const createVoucher = async (code,amount) => {
  return axios.post(
    `${url}/rewards/voucher/create`,{
    bonusAmount:amount,
    code:code
    });
};
export default createVoucher;
