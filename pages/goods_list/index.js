// pages/goods_list/index.js
import { getGoodsList } from '../../api/goods_list/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {id: 0,value:'综合',isActive:true},
      {id: 1,value:'销量',isActive:false},
      {id: 2,value:'价格',isActive:false},
    ],
    goodsList:[],
    defaultUrl: 'http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_1_400x400.jpg'
  },
  formData: {
    cid:'',
    query:'',
    pagenum:1,
    pagesize:10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { cid } = options
    this.formData.cid = cid
    this.getDataList()
  },
  // 接受子组件传值
  handTabsItemChange (e) {
    const { index } = e.detail
    let { tabs } = this.data
    tabs.forEach(( v,i ) => i===index?v.isActive=true:v.isActive=false)
    this.setData({
      tabs
    })
  },
  // 获取商品数据
  getDataList () {
    getGoodsList(this.formData).then(res => {
      this.setData({
        goodsList:res.data.message.goods
      })
    })
  }
})