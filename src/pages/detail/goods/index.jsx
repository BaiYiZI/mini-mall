import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import {
  Image,
  Flex,
  Swiper,
  Stepper,
  Divider,
  Sticky,
  Button
} from "@taroify/core";
import { CartOutlined, ChatOutlined, ShopOutlined } from "@taroify/icons";

import style from "./index.module.less";
export default class Index extends Component {
  state = {
    swiperSet: 0
  };

  onLoad(options) {
    console.log(options);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  setSwiper(index) {
    this.setState({
      swiperSet: index
    });
  }

  render() {
    return (
      <View className="index">
        <Swiper
          autoplay={4000}
          onChange={index => this.setSwiper(index)}
          className={style["swiper"]}
        >
          <Swiper.Item className={style["swiper-item"]}>
            <Image
              mode="scaleToFill"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </Swiper.Item>
          <Swiper.Item className={style["swiper-item"]}>
            <Image
              mode="scaleToFill"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </Swiper.Item>
          <Swiper.Item className={style["swiper-item"]}>
            <Image
              mode="scaleToFill"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </Swiper.Item>
          <Swiper.Item className={style["swiper-item"]}>
            <Image
              mode="scaleToFill"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </Swiper.Item>
          <Swiper.Indicator className={style["custom-indicator"]}>
            {this.state.swiperSet + 1} / 4
          </Swiper.Indicator>
        </Swiper>

        <Flex direction="row" align="center" className={style["price-box"]}>
          <Flex.Item span="16">
            <View className={style["price"]}>￥28.88</View>
          </Flex.Item>
          <Flex className={style["stock"]} direction="row" justify="end">
            剩余库存: 88666
          </Flex>
        </Flex>

        <Flex direction="column" className={style["title-box"]}>
          <Flex.Item span="22" className={style["title"]}>
            <View>麻辣鸭脖 嘎嘎香香香香香香香香香香香香香香香香香</View>
          </Flex.Item>
          <Flex.Item>
            <Flex>
              <View style={{ width: "72vw" }}></View>
              <Stepper min={1} max={99}></Stepper>
            </Flex>
            <View style={{ width: "100vw", height: "2vh" }}></View>
          </Flex.Item>
        </Flex>
        <View className={style["goods-detail"]}>
          <Divider className={style["divider-title"]} dashed>
            商品详情
          </Divider>
          <Flex direction="column" className={style["goods-detail-list"]}>
            <Flex
              direction="row"
              gutter="24"
              className={style["goods-detail-item"]}
            >
              <Flex.Item>商品名称</Flex.Item>
              <Flex.Item>麻辣鸭脖</Flex.Item>
            </Flex>
            <Flex
              direction="row"
              gutter="24"
              className={style["goods-detail-item"]}
            >
              <Flex.Item>商品编号</Flex.Item>
              <Flex.Item>1000010</Flex.Item>
            </Flex>
            <Flex
              direction="row"
              gutter="24"
              className={style["goods-detail-item"]}
            >
              <Flex.Item>上架时间</Flex.Item>
              <Flex.Item>2022-06-03</Flex.Item>
            </Flex>
            <Flex
              direction="row"
              gutter="24"
              className={style["goods-detail-item"]}
            >
              <Flex.Item>商品类型</Flex.Item>
              <Flex.Item>零食</Flex.Item>
            </Flex>
          </Flex>
          <Divider className={style["divider-title"]} dashed>
            图文详情
          </Divider>
          <Flex direction="column">
            <Image mode="widthFix" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <Image mode="widthFix" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <Image mode="widthFix" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </Flex>
        </View>
        <Sticky position="bottom">
          <Flex direction="row" className={style["bottom-bar"]}>
            <Flex.Item span="3" className={style["bottom-item"]}>
              <Flex direction="column" gutter="4" align="center">
                <ChatOutlined size="3.2vh" color={style["ashen"]} />
                客服
              </Flex>
            </Flex.Item>
            <Flex.Item span="3" className={style["bottom-item"]}>
              <Flex direction="column" gutter="4" align="center">
                <CartOutlined size="3.2vh" color={style["ashen"]} />
                购物车
              </Flex>
            </Flex.Item>
            <Flex.Item span="4" className={style["bottom-item"]}>
              <Flex direction="column" gutter="4" align="center">
                <ShopOutlined size="3.2vh" color={style["ashen"]} />
                首页
              </Flex>
            </Flex.Item>
            <Flex.Item span="7">
              <Button className={style["bottom-button-cart"]}>
                加入购物车
              </Button>
            </Flex.Item>
            <Flex.Item span="7">
              <Button className={style["bottom-button-pay"]}>立即购买</Button>
            </Flex.Item>
          </Flex>
        </Sticky>
      </View>
    );
  }
}
