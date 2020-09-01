import axios from 'axios'
export const baseURL = '/api'

const request = axios.create({
    baseURL
})

axios.interceptors.request.use(config => {
    return config
})

axios.interceptors.response.use(response => {
    return response
})

export default request