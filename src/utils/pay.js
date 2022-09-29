import Taro from "@tarojs/taro";
import { options } from "@tarojs/taro-h5";
import { BaseUrl, OnConsole } from "../config/api";

export default async function pay(url, data) {
  try {
    Taro.request({
      url: BaseUrl + url,
      method: "POST",
      data: data,
      success: res => {
        try {
          Taro.requestPayment({
            data: res.data,
            success: () => {
              Taro.showToast({
                title: "支付成功",
                icon: "success"
              });
            },
            fail: err => {
              Taro.showToast({
                title: "支付失败",
                icon: "error"
              });
            }
          });
        } catch (err) {
          Taro.showToast({
            title: "支付错误",
            icon: "error"
          });
          console.log(err);
        }
      },
      fail: () => {}
    });
  } catch (err) {
    Taro.showToast({
      title: "支付错误",
      icon: "error"
    });
    console.log(err);
  }
}
