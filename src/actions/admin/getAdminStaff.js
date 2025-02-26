import axios from "axios";
import { PUBLIC_REST_API_ENDPOINT } from "../../../constant.js";

const getAdminStaff = async () => {
  try {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem("token"));
    console.log(BEARER_TOKEN);
    // const queryString = Object.keys(data)
    //   .map(
    //     (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    //   )
    //   .join("&");
    const response = await axios.get(
      `${PUBLIC_REST_API_ENDPOINT}/api/admin/getStaff`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    console.log("get admin Staff response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while getting Admin Staff", error);
  }
};
export default getAdminStaff;
