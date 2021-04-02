import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2d78aed0-6ada-4ee0-9316-708ff47c7f0d"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow?page=${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow?page=${userId}`)
    }
}

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
// }

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return axios.get(`follow?page=${currentPage}&count=${pageSize}`).then(response => response.data);
}