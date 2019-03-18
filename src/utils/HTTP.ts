import axios from "axios";

const URL: string = "http://127.0.0.1:8000/api/";
const http = axios.create({
  baseURL: URL
});
axios.defaults.headers.common["Authorization"] = `Bearer${window.localStorage.getItem("_token")}`;

export { http, URL };