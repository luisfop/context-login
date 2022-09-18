import { api } from "../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("U", JSON.stringify(user));
};

export function getUserLocalStorage(){
    const json = localStorage.getItem("U");

    if(!json){
        return null
    }
    const user = JSON.parse(json);
    return user ?? null;
}

export async function loginRequest(email: string, password: string) {
  try {
    const request = await api.post("/login", { email, password });
    return request.data;
  } catch (error) {
    return null;
  }
}
