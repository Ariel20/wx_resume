// pages/index/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  /**
   * 页面的点击事件
   */
  learn: function () {
    wx.navigateTo({
      url: '../learn/learn'
    })
  },
  work: function () {
    wx.navigateTo({
      url: '../work/work'
    })
  },
  project: function () {
    wx.navigateTo({
      url: '../project/project'
    })
  },
  op_project: function () {
    wx.navigateTo({
      url: '../os_project/os_project'
    })
  },
  blog: function () {
    wx.navigateTo({
      url: '../blog/blog'
    })
  },
  tech: function () {
    wx.navigateTo({
      url: '../tech/tech'
    })
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
  
  }
})