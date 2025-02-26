import axios from "axios";
import { PUBLIC_REST_API_ENDPOINT } from "../../../constant.js";
const addSeniorTeam = async (data) => {
  try {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem("token"));
    console.log(BEARER_TOKEN);
    // const queryString = Object.keys(data)
    //   .map(
    //     (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    //   )
    //   .join("&");
    const response = await axios.post(
      `${PUBLIC_REST_API_ENDPOINT}/api/senior_manager/create_senior_team`,
      data,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    console.log("create team by senior manager response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while create team by Senior Manager", error);
  }
};
export default addSeniorTeam;
