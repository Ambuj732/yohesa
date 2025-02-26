import axios from "axios";
import { PUBLIC_REST_API_ENDPOINT } from "../../../constant.js";
const addTeam = async (data) => {
  try {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem("token"));
    console.log(BEARER_TOKEN);
    // const queryString = Object.keys(data)
    //   .map(
    //     (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    //   )
    //   .join("&");
    const response = await axios.post(
      `${PUBLIC_REST_API_ENDPOINT}/api/admin/add_staff`,
      data,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    console.log("create team by admin response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while create team by Admin", error);
  }
};
export default addTeam;
