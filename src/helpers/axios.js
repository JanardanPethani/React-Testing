import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://6540c19045bedb25bfc28795.mockapi.io/",
  timeout: 2000,
  headers: { "content-type": "application/json" },
});
