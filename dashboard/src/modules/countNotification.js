import axios from "axios";
import url from "./url";

const countNotification = async () => {
  return axios.get(
    `${url}/admin/message/count`);
};
export default countNotification;
