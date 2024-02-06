import axios from "axios";
import url from "./url";

const getUsers = async (id) => {
  return axios.get(
    `${url}/admin/users`);
};
export default getUsers;
