import axios from "axios";
import url from "./url";

const postPromotionWithTurnover = async (formdata) => {
  return axios.post(
    `${url}/admin/create/promotion`,
    formdata
  );
};
export default postPromotionWithTurnover;
