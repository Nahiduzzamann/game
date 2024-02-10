import axios from "axios";
import url from "./url";

const editAdminBank = async (formDataObject) => {
  return axios.put(`${url}/balance/wallet/update`,formDataObject);
};
export default editAdminBank;