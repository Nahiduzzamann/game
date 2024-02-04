import axios from "axios";
import url from "./url";

const deleteTurnover = async (id) => {
  return axios.delete(
    `${url}/admin/delete/promotion/${id}`);
};
export default deleteTurnover;
