import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "62d36086-8cf0-4417-a821-026cd8b27b32"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
        .then(response => response.data)
    },

    follow (userId) {
        return instance.post(`follow/${userId}`)                                
    },

    unfollow (userId) {
        return instance.delete(`follow/${userId}`)                                 
    },

    getProfile(userId) {
        console.warn('Obsolate method, Please, use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
   
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {
            withCredentials: true
        })
    }
}
