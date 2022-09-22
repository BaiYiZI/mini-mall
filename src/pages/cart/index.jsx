import { Component } from "react";
import { View, Text } from "@tarojs/components";
import ShoppingGoodsCard from "../../components/card/cart-goods";
import style from "./index.module.less";

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View className={style["pages-cart"]}>
        <View className={style["pages-cart-top"]}>
          <Text className={style["pages-cart-top-title"]}>
            商品库存有限请尽快下单！
          </Text>
          <Text className={style["pages-cart-top-edit"]}>编辑</Text>
        </View>
        <ShoppingGoodsCard
          circle={this.circle}
          circleClick={value => console.log(`当前状态：${value}`)}
          stepperClick={value => console.log(`当前值：${value}`)}
          title={"这是一个商品标题"}
          src={"https://img.yzcdn.cn/vant/cat.jpeg"}
          details={"这是一个商品规格"}
          price={890}
          picker={true}
          stepper={true}
          number={10}
        />
      </View>
    );
  }
}
