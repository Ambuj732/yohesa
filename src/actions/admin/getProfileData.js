import axios from "axios";
import { PUBLIC_REST_API_ENDPOINT } from "../../../constant.js";

const getProfileData = async () => {
  try {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem("token"));
    const profileData = JSON.parse(localStorage.getItem("profileDetails"));
    const id = profileData?.staffId;
    console.log(BEARER_TOKEN);
    // const queryString = Object.keys(data)a
    //   .map(
    //     (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    //   )
    //   .join("&");
    const response = await axios.get(
      `${PUBLIC_REST_API_ENDPOINT}/api/admin/getProfile/${id}`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    console.log("Fetch Profile  response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while Fetching Profile", error);
  }
};
export default getProfileData;
