import axios from "axios";

//constante para la URL base de la API
export const reqResApi = axios.create({
    baseURL: "https://reqres.in/api",
    headers: {
        "x-api-key": "reqres-free-v1"
    }
});

