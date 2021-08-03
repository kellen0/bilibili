// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情
    videoInfo: null,
    //推荐视频
    othersList: [],
    //评论数据
    commentData: null,
    //评论图片网址数据
    commentImg: ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc8%2Fdd%2Fb9%2Fc8ddb934a69d90216f1b406cf3975475.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630565663&t=c7a270673d2e31012055a8fb71324c3b',
                  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-b6eae3250bb62fadb3d2527f466cf033_b.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630565663&t=c740d78ea45f76342610cbe3dbd498e2',
                  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F11%2F20200711184432_ic25F.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630565663&t=5f7d52a18a9b30247f40e06c50bbee9a',
                  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190318%2F17%2F1552902723-pKgJImOjeR.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630565663&t=01972105d1fbeeec8020da2d30e0a7e0',
                  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F625%2Fw750h675%2F20181203%2FSpxg-hpfycet1340001.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630565663&t=5e40494c0c1e4d6017de9b1d32a421ad'
                ],
    //视频地址列表
    videoList: [
      "https://vd2.bdstatic.com/mda-kbgjckxnkjnkw3sg/hd/mda-kbgjckxnkjnkw3sg.mp4?v_from_s=hkapp-haokan-hnb&auth_key=1627977412-0-0-a8ff989f1724248abb59ae0c85432975&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=",
      "https://vd4.bdstatic.com/mda-kj09me2t70eer6r9/sc/mda-kj09me2t70eer6r9.mp4?v_from_s=hkapp-haokan-tucheng&auth_key=1627979670-0-0-d2229e42fd8f13d2ccd7488c9554bb00&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=",
      "https://vd2.bdstatic.com/mda-kig9rvdvx4e9bdqm/sc/mda-kig9rvdvx4e9bdqm.mp4?v_from_s=hkapp-haokan-tucheng&auth_key=1627980441-0-0-7dad8ba34cae1e91de6657b2d226eef0&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=",
      "https://vd2.bdstatic.com/mda-jbkw1b8zbaht3h5d/sc/mda-jbkw1b8zbaht3h5d.mp4?v_from_s=hkapp-haokan-tucheng&auth_key=1627980605-0-0-08daf781808db4abefe6a549a21c3e25&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=",

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },

  // 根据id获取视频详情
  getCurrentVideo(videoId) {
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/videoDetail?id=' + videoId,
      success(res) {
        // console.log(res);
        if(res.data.code === 0) {
          that.setData({
            videoInfo:res.data.data.videoInfo,
          })
        }
      }
    })
  },

  //获取推荐视频
  getOthersList(videoId) {
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/othersList?id=' + videoId,
      success(res) {
        // console.log(res);
        if(res.data.code === 0) {
          that.setData({
            othersList:res.data.data.othersList,
          })
        }
      }
    })
  },

  //获取评论数据
  getCommentList(videoId) {
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/commentsList?id=' + videoId,
      success(res) {
        // console.log(res);
        if(res.data.code === 0) {
          that.setData({
            commentData:res.data.data.commentData,
          })
        }
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