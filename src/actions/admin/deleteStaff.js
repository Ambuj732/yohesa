import axios from "axios";
import { PUBLIC_REST_API_ENDPOINT } from "../../../constant.js";

const deleteStaff = async (id) => {
  try {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem("token"));

    console.log(BEARER_TOKEN);
    // const queryString = Object.keys(data)a
    //   .map(
    //     (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    //   )
    //   .join("&");
    const response = await axios.delete(
      `${PUBLIC_REST_API_ENDPOINT}/api/admin/deleteAdminMember/${id}`,

      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    console.log("delete Admin Staff  response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while Deleting Admin Staff", error);
  }
};
export default deleteStaff;
