import axios from "axios";
import url from "./url";

const createBankWallet = async (formDataObject) => {
  return axios.post(
    `${url}/balance/wallet/add`,formDataObject);
};
export default createBankWallet;
