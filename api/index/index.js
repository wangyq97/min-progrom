/**
 * 获取首页数据的接口 
 * 
 */

import { http } from '../../request/index.js'

//  获取轮播图
export const swiperRequest = (data) => {
    return http.get('/home/swiperdata',data)
}

// 获取分类导航
export const cateRequest = (data) => {
    return http.get('/home/catitems',data)
}

// 获取楼层数据
export const floorRequest = (data) => {
    return http.get('/home/floordata',data)
}
