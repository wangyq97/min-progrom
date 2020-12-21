// pages/category/index.js
import { request } from "../../request/index" 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cateLeftList: [],
    cateRightList: [],
    currentIndex: 0,
    scrollTop:0
  },
  
  cateList: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 判断缓存里是否有数据
    const cate_storage = wx.getStorageSync('cate_storage')
    if(!cate_storage) {
      this.getcateList()
    }else {
      if((Date.now() - cate_storage.time)/1000 < 10){
        this.cateList = cate_storage.data
        let cateLeftList = this.cateList.map(i => i.cat_name)
        let cateRightList = this.cateList[this.data.currentIndex].children
        this.setData({
          cateLeftList,
          cateRightList
        })
      }else {
      this.getcateList()
      }
    }
  },
  // 获取数据
  getcateList () {
    request({
      url:'https://api-hmugo-web.itheima.net/api/public/v1/categories'
    }).then ( res => {
      this.cateList = res.data.message
      // 存本地
      wx.setStorageSync('cate_storage',{time:Date.now(),data:this.cateList})
      let cateLeftList = this.cateList.map(i => i.cat_name)
      let cateRightList = this.cateList[this.data.currentIndex].children
      this.setData({
        cateLeftList,
        cateRightList
      })
    } )
  },
  // 点击左边
  handItemTap (e) {
    const { index } = e.currentTarget.dataset
    let cateRightList = this.cateList[index].children
    this.setData({
      currentIndex:index,
      cateRightList,
      scrollTop:0
    })

  }
  
})