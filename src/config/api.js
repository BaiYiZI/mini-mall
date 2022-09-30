export const BaseUrl = "http://127.0.0.1:3003";

export const Dev = process.env.NODE_ENV === "development" ? true : false;

export const Api = {
  banner: "/banner",
  goodsInfo: "/goodsInfo",
  goodsDteailInfo: "/goodsDetailInfo",
  kinds: "/kinds",
  orderInfo: "/orderInfo",
  shopping: "/shoppingInfo",
  login: "/api/v1/user/login",
  pay: "/api/v1/order/pay",
  orderAll: "/orderAll"
};