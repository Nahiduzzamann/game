import axios from "axios";
import url from "./index";

const makeDeposit = async (walletId,amount,promotionId,tranXId) => {
  return axios.post(
    `${url}/balance/deposit`,
    {
      walletId: walletId,
      amount: amount,
      promotionId: promotionId,
      tranXId: tranXId,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
export default makeDeposit;
