import * as axios from "axios";



       const instance = axios.create({
           baseURL: 'https://social-network.samuraijs.com/api/1.0/',
           withCredentials: true,
           headers: {
               'API-KEY': '9f30f44f-419b-4bf8-bd04-721891f6ba94'
           }
    });
export const userAPI = {
    getUsers (currentPage = 1, pageSize = 10) {

    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
}
}

