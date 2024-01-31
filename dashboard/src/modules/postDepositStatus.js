import axios from "axios";
import url from "./url";

const postDepositeStatus = async (id,status,message,username) => {
    console.log(status);
  return axios.post(
    `${url}/admin/deposit/toggle`,
    {
      id: id,
      status: status,
      message: message,
      username:username
    },
  );
};
export default postDepositeStatus;
