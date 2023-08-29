import axios from "./axios";

//const API = "http://localhost:4000/api";

export const registerRequest = (user) => axios.post(`/register`, user); //Nota 1

export const loginRequest = (user) => axios.post(`/login`, user); //Nota 2

export const verityTokenRequet = () => axios.get(`/verify`);
//Nota 1: Lo que estamos diciendo en esa funcion es que crea una constante llamada registerRequest que le van a pasar un usuario
//luego le vas a pasar una peticion Post a /register con el usuario que nos estan pasando
// Instalamos axios para generar las peticiones

//Nota 2: lo que estamos haciendo aca es algo muy similar nos pasan un usuario y luego hacemos un peticion mediante axios post
//al url que esta guardado en api
