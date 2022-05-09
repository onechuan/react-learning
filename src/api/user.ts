import { AxiosResponse } from "axios";
import http from "./http";


export const fetchUserList = ():Promise<any>=>{
    return http.get("/users/list")
}


