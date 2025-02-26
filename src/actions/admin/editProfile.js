import axios from "axios";
import { PUBLIC_REST_API_ENDPOINT } from "../../../constant.js";

const editProfile = async (data) => {
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
    const response = await axios.put(
      `${PUBLIC_REST_API_ENDPOINT}/api/admin/editProfile/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    console.log("Edit Profile  response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while editing profile", error);
  }
};
export default editProfile;
