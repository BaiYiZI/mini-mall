import Taro from "@tarojs/taro";
import { BaseUrl } from "../config/api";

export async function login(url) {
  try {
    Taro.login({
      success: res => {
        console.log(res);
        if (res.code) {
          Taro.request({
            method: "POST",
            // dev testing
            url: "http://192.168.0.49:8000" + url,
            data: {
              code: res.code
            },
            success: res => {
              console.log(res);
              Taro.setStorage({
                key: "user_id",
                data: res.data["user_id"]
              });
            }
          });
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });
  } catch (err) {
    Taro.showToast({
      title: "网络错误",
      icon: "error"
    });
    console.log(err);
  }
}

export default async function check(url) {
  try {
    Taro.checkSession({
      success: function() {
        console.log("Session key check success");
      },
      fail: function() {
        console.log("Relogin");
        login(url);
      }
    });
  } catch (err) {
    Taro.showToast({
      title: "网络错误",
      icon: "error"
    });
    console.log(err);
  }
}
