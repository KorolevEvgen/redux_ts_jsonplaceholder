import {axiosService} from "./axios.service";
import {IUser} from "../interfaces";
import {urls} from "../constants";

export const userService = {
    getAll: () => axiosService.get<IUser[]>(urls.users)
}
