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
