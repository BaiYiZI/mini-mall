import requset from "../utils/request";
import pay from "../utils/pay";
import { Api } from "../config/api";

// home page
export async function getBanner() {
  return requset(Api.banner);
}

export async function getKinds() {
  return requset(Api.kinds);
}

export async function getGoodsInfoByKind(kind) {
  let url = Api.goodsInfo + "?kind=" + kind;
  return requset(url);
}

// goods detail page
export async function getGoodsDteailInfoById(id) {
  let url = Api.goodsDteailInfo + "?id=" + id;
  return requset(url);
}

// cart page
export async function getShoppings() {
  return requset(Api.shopping);
}

// pay page
export async function buy(data) {
  await pay(Api.pay, data);
}