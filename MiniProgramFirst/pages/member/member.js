// pages/member/member.js
let appDatas = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
    zhuceIsShow:'',
    userItem:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    this.setData({
      userInfo: appDatas.globalData.userInfo,
      zhuceIsShow: appDatas.globalData.zhuceIsShow
    })
    var openid = wx.getStorageSync('openid');
    wx.request({
      //url: 'http://127.0.0.1:8080/customer/selectCustomerByOpenId',
      url:'https://wsw.chinanorth.cloudapp.chinacloudapi.cn/scrm-1.0/customer/selectCustomerByOpenId',
      method:'GET',
      data:{
        open_id:openid
      },
      success:function(data){
        console.log(data);
       that.setData({
         userItem:data.data.customer

       })
       
      }
    })
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