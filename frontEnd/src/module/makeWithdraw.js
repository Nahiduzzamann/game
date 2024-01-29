import axios from "axios";
import url from "./index";

const makeWithdraw = async (walletId,amount) => {
  return axios.post(
    `${url}/balance/withdraw`,
    {
        walletId: walletId,
        amount: amount,
     
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
export default makeWithdraw;
