Component({
  data: {
    selected: 0,
    "color": "#2F3030",
    "selectedColor": "#1580AD",
	isShowTu: true,
    list: [{
    		"pagePath": "pages/tabbar/index",
    		"text": "首页",
    		"iconPath": "static/images/tabbar/icon_nav_home.png",
    		"selectedIconPath": "static/images/tabbar/icon_nav_home_pre.png"
    	},{
    		"pagePath": "pages/tabbar/invitation",
    		"text": "邀请",
    		"iconPath": "static/images/tabbar/invitation1@2x.png",
    		"selectedIconPath": "static/images/tabbar/invitation2@2x.png"
    	},
    	{
    		"pagePath": "pages/tabbar/profile",
    		"text": "我的",
    		"iconPath": "static/images/tabbar/personal1@2x.png",
    		"selectedIconPath": "static/images/tabbar/personal2@2x.png"
    	}
  },
  attached() {},
  methods: {
    switchTab(e) {
		console.log(e,this.data.selected);
      const data = e.currentTarget.dataset
      if (data.index == 1) {
        wx.scanCode({
          success(res) {
            console.log(res)
            wx.navigateTo({
              url: '/pages/feedback/feedback'
            })
          }
        })

      } else {
        const url = data.path
        wx.switchTab({
          url
        })
      }
    }
  }
})