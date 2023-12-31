import axios from "axios";
import qs from "qs";
import { API_ENDPOINT } from "@env";

// console.log(API_ENDPOINT);

const axiosClient = axios.create({
  // baseURL: "https://316f-222-253-157-117.ngrok-free.app/customer/",
  baseURL: API_ENDPOINT,

  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    encode: (params) => qs.stringify(params, { arrayFormat: "brackets" }),
  },
});

axiosClient.interceptors.request.use((config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error && error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

const axiosPrivate = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  paramsSerializer: {
    encode: (params) => qs.stringify(params, { arrayFormat: "brackets" }),
  },
});

export { axiosClient, axiosPrivate };
