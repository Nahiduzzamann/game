import axios from "axios";
import url from "./index";

const getGameHistory = async (id) => {
  return axios.get(`${url}/history/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
export default getGameHistory;
