export const BaseUrl = "http://192.168.0.31:3003";

export const Dev = process.env.NODE_ENV === "development" ? true : false;

export const Api = {
  banner: "/banner",
  goodsInfo: "/goodsInfo",
  goodsDteailInfo: "/goodsDetailInfo",
  kinds: "/kinds",
  orderInfo: "/orderInfo",
  shopping: "/shoppingInfo",
  login: "/api/v1/user/login",
  pay: "/api/v1/order/pay"
};