import axios from "axios";
import url from "./index";

const deleteUserWallet = async (id) => {
  return axios.delete(`${url}/balance/user/wallet/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
export default deleteUserWallet;