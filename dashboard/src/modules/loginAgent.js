import axios from "axios";
import url from "./url";

const loginAgent = async (email,password) => {
  return axios.post(
    `${url}/admin/agents/login`,{
        email:email,
        password:password
    });
};
export default loginAgent;
