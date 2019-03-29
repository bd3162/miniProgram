// pages/register/register.js
let appDatas=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},//用户信息
    formData: {},
    zhuceIsShow: false,
    verif:'',
  },
   bindVerif: function (e) {
     this.setData({
       verif: e.detail.value
     })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  startLogin: function (e) {
    var that = this;
    console.log(e);
    var verif = this.data.verif;
    console.log(verif);
    //console.log(formdata.verif);
    var open_id=wx.getStorageSync('openid')
    console.log(open_id);
    var userInfosend = appDatas.globalData.userInfo;
    console.log(userInfosend)
    wx.request({
      //url: 'http://127.0.0.1:8080/cashier/updateOpenId',
      url:'https://wsw.chinanorth.cloudapp.chinacloudapi.cn/scrm-1.0/cashier/updateOpenId',
      method: 'GET',
      data: {
        open_id: open_id,
        city: userInfosend.province,
        gender: userInfosend.gender,
        avatarUrl: userInfosend.avatarUrl,
        verif: verif//JSON.stringify(formdata),

       },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        //服务器返回的值
        var success=res.data.message;
        
        if(success !=false){
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1500
             }) 
          // that.setData({
            
          //   zhuceIsShow: true

           
          // });
          appDatas.globalData.zhuceIsShow = true;
          wx.navigateTo({
            url: '../memberTwo/memberTwo',
          })
          //that.onShow();
        }else{
          wx.showToast({
            title: '失败，请重新认证',
            icon: 'success',
            duration: 1100
          }) 
        }
        
        //返回二维码
        //appDatas.globalData.userPictrue = res.data;
        
       // appDatas.globalData.user = formdata;
        
      }
    })
    appDatas.globalData.zhuceIsShow = true;
    //appDatas.globalData.user = formdata;
    that.onShow();
  },
  /**
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