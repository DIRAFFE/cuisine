export default {
  pages: [
    "pages/index/index",
    "pages/cuisine-type/index",
    "pages/food-type/index",
    "pages/note/index",
    "pages/my/index",
    "pages/noodleDetails/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  cloud: true,
  tabBar: {
    color: "#666666",
    selectedColor: "#ff0000",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "images/tabbar/home.png",
        selectedIconPath: "images/tabbar/home-selected.png",
      },
      {
        pagePath: "pages/cuisine-type/index",
        text: "菜谱分类",
        iconPath: "images/tabbar/cuisine-type.png",
        selectedIconPath: "images/tabbar/cuisine-type-selected.png",
      },
      {
        pagePath: "pages/food-type/index",
        text: "食材大全",
        iconPath: "images/tabbar/food-type.png",
        selectedIconPath: "images/tabbar/food-type-selected.png",
      },
      {
        pagePath: "pages/note/index",
        text: "笔记",
        iconPath: "images/tabbar/note.png",
        selectedIconPath: "images/tabbar/note-selected.png",
      },
      {
        pagePath: "pages/my/index",
        text: "个人中心",
        iconPath: "images/tabbar/my.png",
        selectedIconPath: "images/tabbar/my-selected.png",
      },
    ],
  },
};
