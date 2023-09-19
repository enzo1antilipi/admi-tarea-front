import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

export default instance;
//baseURL: "http://localhost:4000/api",
//https://admi-tarea-render.onrender.com/api
