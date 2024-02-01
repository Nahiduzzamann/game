import axios from "axios";
import url from "./url";

const postWithdrawStatus = async (id,status,message,username) => {
   
  return axios.post(
    `${url}/admin/withdraw/toggle`,
    {
      id: id,
      status: status,
      message: message,
      username:username
    },
  );
};
export default postWithdrawStatus;
