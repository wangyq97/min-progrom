//Page Object
import { swiperRequest, cateRequest, floorRequest } from "../../api/index/index.js"
Page({
  data: {
    swiperList: [],
    cateList: [],
    floorList: [],
  },
  //options(Object)
  onLoad: function (options) { //页面开始加载就会触发
    // 开启异步请求 获取轮播图数据
    this.getSwiperData()
    this.getCateData()
    this.getfloorData()
  },
  // 获取轮播图 
  getSwiperData() {
    swiperRequest().then(res => {
      this.setData({
        swiperList: res.data.message
      })
    })
  },
  // 获取分类导航
  getCateData() {
    cateRequest().then(res => {
      this.setData({
        cateList: res.data.message
      })
    })
  },
  // 获取楼层数据
  getfloorData() {
    floorRequest().then(res => {
      this.setData({
        floorList: res.data.message
      })
    })
  }

});
