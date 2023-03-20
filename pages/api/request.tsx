import axios from "axios";
export const API_URL = process.env.NEXT_PUBLIC_API_STAGING_API_URL;
console.log("🚀 ~ file: request.tsx:3 ~ API_URL:", API_URL);
export const LOGIN = "login";
export const REGISTER = " register";

export function login(email: any, password: any) {
  return axios.post(`${API_URL}${LOGIN}`, {
    email,
    password,
  });
}
