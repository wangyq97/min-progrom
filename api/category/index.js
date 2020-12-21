import { http } from '../../request/index.js'

export const cateListRequest = (data) => {
    return http.get('/categories',data)
}