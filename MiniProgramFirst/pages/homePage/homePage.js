//Pages/homePage/homePage.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:'',
    goodsItems:[],
    activityItems:[],
    goodsWelfareItems: [
      {
        goodId: 0,
        name: '泊尔崖蜜蜜光面膜（5片盒装）',
        url: 'bill',
        imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/142/fb2960bf8e074d029c24315279289c19-5_218x274_70.jpg',
        newprice: "86",
        oldprice: "88",
        discount:"9.5"
      },
      {
        goodId: 1,
        name: '透无瑕矿物养护两用粉饼#03',
        url: 'bill',
        imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/21/27/4b24e2a629644877866d3da755f6a36e-5_218x274_70.jpg',
        newprice: "147.00",
        oldprice: "150.00",
      },
      {
        goodId: 2,
        name: '川水水光面膜（5片盒装）',
        url: 'bill',
        imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/86/7891361fdab348a1bc91aeca31fc77b1-5_218x274_70.jpg',
        newprice: "86.00",
        oldprice: "88.00",
      },
      {
        goodId: 3,
        name: '蜜三色渐变咬唇膏3.2g 03蜜橙动心恋',
        url: 'bill',
        imageurl: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
        newprice: "97.00",
        oldprice: "99.00",
      },
      {
        goodId: 4,
        name: '时焕颜亮采套装',
        url: 'bill',
        imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/93/69a6bc1c11eb4be184b7dffb43b8565b-5_218x274_70.jpg',
        newprice: "398.00",
        oldprice: "459.00",
      }, {
        goodId: 5,
        name: '雪域眼霜套装',
        url: 'bill',
        imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/23/127/53409c86f74647af915bc379427b97c2-5_218x274_70.jpg',
        newprice: "238.00",
        oldprice: "358.00",
      }
      , {
        goodId: 6,
        name: '凝时鲜颜冰肌水套装',
        url: 'bill',
        imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/11/13/95/fb6c3d0c1f304b449dadb1f0100c1205-5_218x274_70.jpg',
        newprice: "248.00",
        oldprice: "348.00",
      }
      , {
        goodId: 7,
        name: '雪润皙白精选三件套',
        url: 'bill',
        imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/30/184/a5000156098940b5a05a0e696535ac20-5_218x274_70.jpg',
        newprice: "348.00",
        oldprice: "396.00",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //活动信息
    wx.request({
      //url: 'http://127.0.0.1:8080/activity/selectList',
      url:'https://wsw.chinanorth.cloudapp.chinacloudapi.cn/scrm-1.0/activity/selectList',
      success:function(data){
        console.log(data.data.list);
        console.log(data);
        that.setData({
          activityItems:data.data.list
        })
        
      }
    })
    this.twoRequest()
    
  },
  twoRequest:function(){
    var that =this;
    const value = wx.getStorageSync('openid');
    console.log(value);
    this.setData({
      openid: value
    });
    //个性话推荐
    wx.request({
      //url: 'http://127.0.0.1:8080/recom/acceptOpenId',
      url: "https://wsw.chinanorth.cloudapp.chinacloudapi.cn/scrm-1.0/HotGoods/selectById",
      data: {
        id: value
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function (data) {
        console.log(data);
        console.log(data.data.个人推荐商品);
        that.setData({
          goodsItems: data.data.个人推荐商品
        })
      }

    })
  },
  carouselToDetail:function(event){
    console.log(event);
    //id是活动的id
    let id = event.target.dataset.index;
    wx.navigateTo({
      url: '/pages/activityDetail/activityDetail?id=' + id,
    })
    
    //wx
    // wx.navigateTo({
    //   url: '/pages/activityDetail/activityDetail?index=' + index,
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //this.twoRequest();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})