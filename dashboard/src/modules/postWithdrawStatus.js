import axios from "axios";
import url from "./url";

const postWithdrawStatus = async (id,status,message) => {
   
  return axios.post(
    `${url}/admin/withdraw/toggle`,
    {
      id: id,
      status: status,
      message: message,
    },
  );
};
export default postWithdrawStatus;
