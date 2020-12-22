// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:() => {
        return []
      }
    },
    goodsList: {
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    defaultUrl: 'http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_1_400x400.jpg'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handItemTap (e) {
      const { index } = e.currentTarget.dataset
      // console.log(index);
      this.triggerEvent("tabsItemChange",{index})
    }
  }
})
