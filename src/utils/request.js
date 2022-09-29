import Taro from "@tarojs/taro";
import { BaseUrl, Dev } from "../config/api";

export default async (url, payload = {}, method = "GET") => {
  const Dest = BaseUrl + url;

  if (Dev) {
    console.log(
      `${new Date().toLocaleString()} dest: ${Dest} data: ${JSON.stringify(
        payload
      )}`
    );
  }

  return await Taro.request({
    url: Dest,
    data: payload,
    header: {
      "Content-Type": "application/json"
    },
    method: method,
    success: res => {
      const { statusCode, data } = res;

      if (statusCode == 200) {
        if (Dev) {
          console.log(
            `${new Date().toLocaleString()} dest: ${Dest} res: ${JSON.stringify(
              data
            )}`
          );
        }
      } else {
        Taro.showToast({
          title: "网络错误",
          icon: "error"
        });
      }
    },
    fail: err => {
      Taro.showToast({
        title: "请求失败",
        icon: "error"
      });

      return err;
    }
  });
};
