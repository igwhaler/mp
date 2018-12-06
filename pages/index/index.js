//index.js
/* let { showHehe } = require('./../../common/index.js')
showHehe() */
const { API_URL } = require('./../../config/api.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    isLoading: true,
    artList: [
      /* {
        id: 1,
        title: '题都城南庄',
        content: '去年今日此门...',
        image: '../../assets/homePage/1.jpg',
        time: '2016-09-23'
      },
      {
        id: 2,
        title: 'Nginx的玩法(一)',
        content: '厉害了我的nginx...',
        image: '../../assets/homePage/2.jpg',
        time: '2018-01-23'
      } */
    ]
  },

  onLoad () {
    this.getArtList()
  },

  getArtList () {
    this.setData({
      isLoading: false
    })

    wx.request({
      url: API_URL,
      method: 'GET',
      data: {
        query: `{articles{list{id,title,summary,cover,created}}}`
      },
      success: (res) => {
        let { articles } = res.data.data || {}

        this.setData({
          artList: articles.list,
          isLoading: false
        })
      }
    })
  }
})