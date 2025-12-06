import {instance} from "./instance";
import {ProfileType} from "../../redux/profileReducer";

export const usersAPI = {
   getUsers: async (currentPage: number = 1, pageSize: number = 10) => {
      const res = await instance.get(`/users?page=${currentPage}&count=${pageSize}`);
      return res.data
   },
   unfollowUser: async (userId: number) => {
      const res =  await instance.delete(`/follow/${userId}`);
      return res.data
   },
   followUser: async (userId: number) => {
      const res =  await instance.post(`/follow/${userId}`);
      return res.data
   }
}

export const authAPI = {
   authMe: async () => {
      const res = await instance.get(`/auth/me`);
      return res.data;
   },
}

export const profileAPI = {
   getUserProfile: async (userId: string) => {
      const res = await instance.get<ProfileType>(`/profile/${userId}`);
      return res.data;
   }
}