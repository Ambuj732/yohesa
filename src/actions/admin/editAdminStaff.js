import axios from "axios";
import { PUBLIC_REST_API_ENDPOINT } from "../../../constant.js";

const editAdminStaff = async (data, id) => {
  try {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem("token"));
    console.log(BEARER_TOKEN);
    // const queryString = Object.keys(data)a
    //   .map(
    //     (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    //   )
    //   .join("&");
    const response = await axios.put(
      `${PUBLIC_REST_API_ENDPOINT}/api/admin/editAdminProfile/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    console.log("Edit Admin Team Profile  response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while editing Admin Team profile", error);
  }
};
export default editAdminStaff;
