import axios from "axios";

export const api = axios.create({
    baseURL: 'https://gather-backend.vercel.app'
})