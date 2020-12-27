import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':  'b749946b-aad9-43c0-84bb-d1eaf5c5f4a1'
    }
})

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
}

export const unfollowUsers = (unfollow, userId) => {
    return instance.delete(`follow/${userId}`)
    .then(response => {
        if (response.data.resultCode === 0) {
            unfollow(userId)
        }
    })
}

export const followUsers = (follow, userId) => {
    return instance.post(`follow/${userId}`)
    .then(response => {
        if (response.data.resultCode === 0) {
            follow(userId)
        }
    })
}

export const header = () => {
    return instance.get(`/auth/me`)
    .then(response => {
        return response.data;
    })
}