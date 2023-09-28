import axios from "axios";
import { API_URL } from "../helpers/constants";

export const login = async ({ email, password }) => {
  console.log("e", API_URL )
  console.log("e", email)
  console.log("p", password)
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    const data = response?.data;
    return { success: true, data };
  } catch (error) {
    if (
      error.response &&
      error.response?.status >= 400 &&
      error.response?.status <= 500
    ) {
      return {
        success: false,
        error: error.response.data.message || error.response.data,
      };
    }
  }
};
