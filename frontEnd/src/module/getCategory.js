import axios from "axios";

const getCategory = async (links) => {
  return await axios.get(`${links}/category`);
};
export default getCategory;
