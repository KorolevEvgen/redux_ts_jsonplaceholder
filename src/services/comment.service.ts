import {axiosService} from "./axios.service";
import {IComment} from "../interfaces";
import {urls} from "../constants";

export const commentService = {
    getAll: () => axiosService.get<IComment[]>(urls.comments),
    getById: (id: string) => axiosService.get(`${urls.comments}/${id}`)
}
