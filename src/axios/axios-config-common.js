import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../store/actions/url";

const axiosConfigCommon = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true
});

axiosConfigCommon.interceptors.request.use(
  async resp => {
    const token = Cookies.get("auth");
    if (token) {
      resp.headers.authorization = "Bearer " + token;
      resp.headers.Accept = "application/json";
      resp.headers.AccessControlAllowOrigin = "*";

      return resp;
    }
  },
  error => Promise.reject(error)
);

export default axiosConfigCommon;
