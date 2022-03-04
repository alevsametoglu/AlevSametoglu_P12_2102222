import axios from 'axios'
axios.defaults.baseURL = `http://localhost:3000`

const getData = (url) => axios.get(url).then((response) => response.data.data)

export const API = {
    /**
     * Returns the sum of a and b
     * @param {number} userId
     * @returns {Object} user info
     */

    getUser: (userId) => {
        const url = `/user/${userId}`
        return getData(url)
    },
    getUserPerformance: (userId) => {
        const url = `user/${userId}/performance`
        return getData(url)
    },
    getUserActivity: (userId) => {
        const url = `user/${userId}/activity`
        return getData(url)
    },
    getUserAverageSessions: (userId) => {
        const url = `user/${userId}/average-sessions`
        return getData(url)
    },
}
