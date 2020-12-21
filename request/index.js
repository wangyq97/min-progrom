export const http = {}
const methodsList = ['get', 'post']
const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
const header = { 'content-type': 'application/json' }
const timeout = 30000
methodsList.forEach(method => {
    http[method] = (url, data = {}, extr = {}) => {
        method = method.toLocaleUpperCase()
        return request({
            url,
            data,
            method,
            header: extr.header //后续 可自行添加参数 分类型判断
        })
    }
})

const request = (options) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseUrl + options.url,
            method: options.method,
            data: options.data,
            header: options.header || header,
            timeout: options.timeout || timeout,
            dataType: options.dataType || 'json',
            responseType: options.responseType || 'text',
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        });

    })
}