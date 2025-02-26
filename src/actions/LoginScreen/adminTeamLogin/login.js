import axios from "axios";
import {
  PUBLIC_REST_API_ENDPOINT,
  BEARER_TOKEN,
} from "../../../../constant.js";
const login = async (data) => {
  try {
    const queryString = Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join("&");
    const response = await axios.post(
      `${PUBLIC_REST_API_ENDPOINT}api/admin/login`,
      data
    );
    console.log("Login response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while login", error);
  }
};
export default login;
