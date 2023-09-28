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

export const buyStock = async (props) => {
  const response = await axios.post(`${API_URL}/stock/buy`, props);
  if (response.status !== 201) throw new Error("Error buying Stock");
  const data = await response.data;
  return data.data;
};
