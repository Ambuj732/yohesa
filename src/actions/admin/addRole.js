import axios from "axios";
import { PUBLIC_REST_API_ENDPOINT } from "../../../constant.js";
const addRole = async (data) => {
  try {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem("token"));
    console.log(BEARER_TOKEN);
    // const queryString = Object.keys(data)
    //   .map(
    //     (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    //   )
    //   .join("&");
    const response = await axios.post(
      `${PUBLIC_REST_API_ENDPOINT}/api/admin/create_role`,
      data,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    console.log("Create role response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while creating role::", error);
  }
};
export default addRole;
