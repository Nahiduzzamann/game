import axios from "axios";
import url from "./index";

const editUserWallet = async (walletNumber,walletId) => {
  return axios.put(`${url}/balance/user/wallet/update`,
  
  {
    walletNumber: walletNumber,
    walletId: walletId,
 
},
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
export default editUserWallet;