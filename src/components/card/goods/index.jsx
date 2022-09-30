import { Component } from "react";
import { Text, View } from "@tarojs/components";

import style from "./index.module.less";
import { Flex, Image } from "@taroify/core";
import { CartOutlined } from "@taroify/icons";

export default class GoodsCard extends Component {
  state = {
    img: this.props.img,
    title: this.props.title,
    price: this.props.price
  };

  render() {
    return (
      <Flex
        direction="column"
        gutter="24"
        className={[style.root, this.props.className]}
        onClick={this.props.toGoods}
      >
        <View
          justify="center"
          align="center"
          className={style["image-content"]}
        >
          <Image
            src={this.state.img}
            mode="widthFix"
            className={style.img}
            placeholder="加载中..."
            fallback="加载失败"
          />
        </View>

        <View className={style["title-box"]}>
          <View className={style["title"]}>{this.state.title}</View>
        </View>

        <Flex
          direction="row"
          justify="space-around"
          align="center"
          className={style["price-box"]}
        >
          <Flex.Item className={style["price"]} span="20">
            <Text>{"￥" + this.state.price}</Text>
          </Flex.Item>

          <Flex.Item
            span="4"
            onClick={this.props.toCart}
            className={style["cart-icon"]}
          >
            <CartOutlined style={{ color: style["main-color"] }} size="24px" />
          </Flex.Item>
        </Flex>
      </Flex>
    );
  }
}
