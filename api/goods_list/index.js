import { http } from '../../request/index.js'

export const getGoodsList = data => {
    return http.get('/goods/search',data)
}