// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  data: {
    array: ['2018-2019 sem1', '2017-2018 sem2', '2017-2018 sem1', '2016-2017 sem2', '2016-2017 sem1', '2015-2016 sem2', '2015,2016 sem1'],
    index: 0
  },

  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail)
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 20000
    }),
    wx.request({
      url: 'http://222.178.8.39:8000/gpa',
      data: {
        'username':e.detail.value.username,
        'password':e.detail.value.password
        // 'sem':e.detail.value.sem
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        // responseType: 'text'
        },
      method: 'POST',
      success: function(res) {
        var info = res.data;
        wx.setStorage({
          key: 'info',
          data: info,
        })
        wx.navigateTo({
          url: '../results/results',
          // 到底怎么才能把数据带着走？？？？？？？？？？？？？？？？？
        })
      },
      fail: function(res) {
        wx.navigateTo({
          url: '../ERR/ERR'
        })
      },
      // complete: function(res) {},
    })
  },

  formReset(e) {
    // console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },


  // request(){
  //   wx.request({
  //   url: 'test.php', // 仅为示例，并非真实的接口地址
  //   data: {
  //     username: '{{}}',
  //     password: '{{}}',
  //     sem:'{{}}'
  //   },
  //   header: {
  //     'content-type': 'application/x-www-form-urlencoded' // 默认值
  //   },
  //   success(res) {
  //     console.log(res.data)
  //   }
  // })}


})
