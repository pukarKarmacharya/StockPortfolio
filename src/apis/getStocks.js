import axios from "axios";
import { API_URL } from "../helpers/constants";

axios.interceptors.request.use((config) => {
  //@ts-ignore
  const token = document?.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("x-access-token="))
    ?.split("=")[1];
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});

export const getStocks = async () => {
  const response = await axios.get(`${API_URL}/stocks`);
  if (response.status !== 200) throw new Error("Error fetching stocks");
  const data = await response?.data;
  return data;
};
