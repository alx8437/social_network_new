import {instance} from "./instance";

export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
   return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
}