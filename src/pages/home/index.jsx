import { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

import GoodsCard from "../../components/card/goods/index";

import { getBanner } from "../../service/config";
import { getGoodsInfo } from "../../service/goods";

import style from "./index.module.less";
import { Image, Flex, Skeleton, WhiteSpace } from "@taroify/core";

export default class Index extends Component {
  state = {
    banner: "",
    goodsInfo: [],
    loading: true
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
    const goodsInfo = await getGoodsInfo();

    this.setState({
      banner: banner[0],
      goodsInfo,
      loading: false
    });

    Taro.hideLoading();
  }

  render() {
    let banner = this.state.banner;
    let goodsList = this.state.goodsInfo.map((item, index) => {
      return <GoodsCard title={item.title} img={item.img} price={item.price} />;
    });
    let skeletons = [];

    for (let i = 0; i < 4; i++) {
      skeletons.push(<WhiteSpace />);
      skeletons.push(<Skeleton style={{ width: "90%" }} />);
    }

    return (
      <View className="index">
        {this.state.loading ? (
          <>
            <Flex
              direction="column"
              justify="center"
              align="center"
              className={style["banner"]}
            >
              <WhiteSpace />
              <Skeleton style={{ width: "100%", height: "90%" }} />
              <WhiteSpace />
            </Flex>

            <Flex direction="column" justify="center" align="center">
              {skeletons}
              <WhiteSpace />
              {skeletons}
            </Flex>
          </>
        ) : (
          <>
            <Image className={style["banner"]} src={banner} mode="hightFix" />
            <View className={style["goods-list"]}>{goodsList}</View>
          </>
        )}
      </View>
    );
  }
}
