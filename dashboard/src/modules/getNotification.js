import axios from "axios";
import url from "./url";

const getNotification = async () => {
  return axios.get(
    `${url}/admin/message/get`);
};
export default getNotification;
