import { Component } from "react";
import { Text } from "@tarojs/components";

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
        className={style.root}
        onClick={this.props.onClick}
      >
        <Flex.Item
          justify="center"
          align="center"
          span="24"
          className={style.content}
        >
          <Image
            src={this.state.img}
            mode="center"
            className={style.img}
            placeholder="加载中..."
            fallback="加载失败"
          />
        </Flex.Item>

        <Flex className={style.content}>
          <Flex.Item span="22">
            <Text className={style["p-title"]}>{this.state.title}</Text>
          </Flex.Item>
        </Flex>

        <Flex
          direction="row"
          justify="space-between"
          align="center"
          className={style.content}
        >
          <Flex.Item className={style["p-price"]} span="6">
            <Text>{"￥" + this.state.price}</Text>
          </Flex.Item>

          <Flex.Item align="center" span="3" className={[style.testing]}>
            <CartOutlined style={{ color: style["main-color"] }} size="24px" />
          </Flex.Item>
        </Flex>
      </Flex>
    );
  }
}
