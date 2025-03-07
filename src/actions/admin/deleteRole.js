import axios from "axios";
import { PUBLIC_REST_API_ENDPOINT } from "../../../constant.js";

const deleteRole = async (id) => {
  try {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem("token"));

    console.log(BEARER_TOKEN);
    // const queryString = Object.keys(data)
    //   .map(
    //     (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    //   )
    //   .join("&");
    const response = await axios.delete(
      `${PUBLIC_REST_API_ENDPOINT}/api/admin/deleteRole/${id}`,

      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );
    console.log("delete Role  response :: ", response);
    return response;
  } catch (error) {
    console.log("Error while Deleting Role", error);
  }
};
export default deleteRole;
