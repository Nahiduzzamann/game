import axios from "axios";
import url from "./index";

const createUserWallet = async (walletId,walletNumber) => {
  return axios.post(
    `${url}/balance/user/wallet/create`,
    {
        walletNumber: walletNumber,
        walletId: walletId,
     
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
export default createUserWallet;
