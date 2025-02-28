import axios from "axios";
import { PUBLIC_REST_API_ENDPOINT, BEARER_TOKEN } from "../../constant.js";
const staffLogin = async (data) => {
  try {
    const queryString = Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join("&");
    const response = await axios.post(
      `${PUBLIC_REST_API_ENDPOINT}/api/staffLogin`,
      data
    );
    console.log("staffLogin response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while staffLogin", error);
  }
};
export default staffLogin;
