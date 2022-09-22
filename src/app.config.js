import i18n from "./i18n/locales";

const T = new i18n("zh");

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
    backgroundTextStyle: "light"
  },
  tabBar: {
    color: "#999999",
    selectedColor: "#F42121",
    backgroundColor: "#FFFFFF",
    list: [
      {
        pagePath: "pages/home/index",
        text: T.text().home.home,
        iconPath: "./public/icon/home.png",
        selectedIconPath: "./public/icon/home-select.png"
      },
      {
        pagePath: "pages/cart/index",
        text: T.text().cart.cart,
        iconPath: "./public/icon/cart.png",
        selectedIconPath: "./public/icon/cart-select.png"
      },
      {
        pagePath: "pages/user/index",
        text: T.text().user.user,
        iconPath: "./public/icon/user.png",
        selectedIconPath: "./public/icon/user-select.png"
      }
    ],
    position: "bottom"
  }
});
