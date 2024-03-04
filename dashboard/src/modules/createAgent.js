import axios from "axios";
import url from "./url";

const createAgent = async (email,password,name) => {
  return axios.post(
    `${url}/admin/agents/register`,{
        email:email,
        password:password,
        name:name
    });
};
export default createAgent;
