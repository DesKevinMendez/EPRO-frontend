import axios from "axios";

// const URL: string = "http://127.0.0.1:8000/api/";
// const URL: string = "http://192.168.208.131/api/";
const URL: string = "https://estandares-programacion.herokuapp.com/api/";

const http = axios.create({
  baseURL: URL
});
axios.defaults.headers.common["Authorization"] = `Bearer${window.localStorage.getItem("_token")}`;

export { http, URL };