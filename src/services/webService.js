import axios from "axios";
import { SERVICE_CONSTANTS } from "../constants/constants";

const getCharacterByName = (name) => {
  return axios
    .get(SERVICE_CONSTANTS.url + "?search=" + name)
    .then((response) => response.data.results)
    .catch((error) => {
      console.log("Error getting character, ", error);
    });
};

export default getCharacterByName;
