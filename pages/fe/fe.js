//fe.js
//获取应用实例
const app = getApp()

Page({
  data: {},

  onLoad () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  onShareAppMessage (res) {
    return {
      title: '123',
      path: 'pages/fe/fe',
      success (res) {
        wx.getShareInfo({
          shareTicket: res.shareTickets[0],

          success (res) {
            console.log('success', res)
          },

          fail (err) {
            console.log('fail', err)
          }
        })
      }
    }
  }
})
