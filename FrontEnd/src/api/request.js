import axios from 'axios'

const request = axios.create({
    baseURL: '/api'
})

axios.interceptors.request.use(config => {
    return config
})

axios.interceptors.response.use(response => {
    return response
})

export default request