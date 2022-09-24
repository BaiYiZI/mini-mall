import Taro from "@tarojs/taro";
import { options } from "@tarojs/taro-h5";
import { BaseUrl, OnConsole } from "../config/service";

export default async (url, payload = {}, method = "GET") => {
  const Dest = BaseUrl + url;

  if (OnConsole) {
    console.log(
      `${new Date().toLocaleString()} dest: ${Dest} data: ${JSON.stringify(
        options.payload
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
        if (OnConsole) {
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

        return statusCode;
      }
    },
    fail: () => {
      Taro.showToast({
        title: "请求失败",
        icon: "error"
      });
    }
  });
};
