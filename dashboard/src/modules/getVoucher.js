import axios from "axios";
import url from "./url";

const getVoucher = async () => {
  return axios.get(
    `${url}/rewards/voucher/get`);
};
export default getVoucher;
