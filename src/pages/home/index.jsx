import { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

import { getBanner } from "../../service/config";

import style from "./index.module.less";
import { Image } from "@taroify/core";
export default class Index extends Component {
  state = {
    banner: ""
  };

  componentWillMount() {}

  componentDidMount() {
    this.loading();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  async loading() {
    Taro.showLoading({
      title: "Loading"
    });

    const banner = await getBanner();

    this.setState({
      banner: banner[0]
    });

    Taro.hideLoading();
  }

  render() {
    let banner = this.state.banner;

    return (
      <View className="index">
        <Image className={style["banner"]} src={banner} mode="hightFix" />
      </View>
    );
  }
}
