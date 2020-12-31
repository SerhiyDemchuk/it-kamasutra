import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':  'ae54f20b-e5f2-4e3f-bbbc-fa9a3539313f'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }, 
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get(`/auth/me`)
        .then(response => {
            return response.data;
        })
    }
}