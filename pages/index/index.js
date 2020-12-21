//Page Object
import { request } from "../../request/index"
Page({
  data: {
    swiperList:[],
    cateList:[],
    floorList:[],
  },
  //options(Object)
  onLoad: function(options) { //页面开始加载就会触发
    // 开启异步请求 获取轮播图数据
    this.getSwiperData()
    this.getCateData()
    this.getfloorData()
  },
  // 获取轮播图 
  getSwiperData () {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    }).then(res => {
      this.setData({
        swiperList: res.data.message
      })
    })
  },
  // 获取分类导航
  getCateData () {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
    }).then(res => {
      this.setData({
        cateList: res.data.message
      })
    })
  },
  getfloorData () {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
    }).then(res => {
      this.setData({
        floorList: res.data.message
      })
    })
  }
  
});
  