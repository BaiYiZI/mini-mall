export default defineAppConfig({
  pages: [
    "pages/home/index",
    "pages/cart/index",
    "pages/user/index",
    "pages/order/index",
    "pages/pay/index",
    "pages/detail/goods/index",
    "pages/detail/logistics/index",
    "pages/detail/order/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#F42121",
    navigationBarTextStyle: "white",
    enablePullDownRefresh: true,
    backgroundColor: "#EFEFEF",
    backgroundTextStyle: "light",
  },
  tabBar: {
    color: "#999999",
    selectedColor: "#F42121",
    backgroundColor: "#FFFFFF",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./public/icon/home.png",
        selectedIconPath:  "./public/icon/home-select.png"
      },
      {
        pagePath: "pages/cart/index",
        text: "购物车",
        iconPath: "./public/icon/cart.png",
        selectedIconPath:  "./public/icon/cart-select.png"
      },
      {
        pagePath: "pages/user/index",
        text: "我的",
        iconPath: "./public/icon/user.png",
        selectedIconPath:  "./public/icon/user-select.png"
      }
    ],
    position: "bottom"
  }
});