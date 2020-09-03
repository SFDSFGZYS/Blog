import { baseURL } from '@/api/request'
import Mock from 'mockjs'

const url = `post|${baseURL}/login`
export default {
    [url]: option => {
        return {
            code: 0,
            msg: 'success',
            data: {
                'id': '@id',
                'userName': '@cname',
                'token': '@string("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 32)'
            }
        }
    }
}