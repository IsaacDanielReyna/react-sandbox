import api from '../utils/api'

const userService = {
    profile: (username) => {
        return api.get(`/profile/${username}/`)
    },
    register: (user) => {
        return api.post(`/register/`, user)
    },
    getUsers: () => {
        return api.get('list')
    }
} 

export default userService;