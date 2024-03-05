import axios from "axios";
import url from "./url";

const changePassword = async (email,oldPassword,newPassword) => {
  return axios.post(
    `${url}/admin/agents/change-password`,{
        oldPassword:oldPassword,newPassword:newPassword,
        email:email
    });
};
export default changePassword;
