import request from './request'

export function testApi(data) {
    request({
        method: 'post',
        url: '/postSome',
        data
    })
}