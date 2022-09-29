// import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text } from "@tarojs/components";
import ShoppingGoodsCard from "../../../components/card/cart-goods";
import style from "./index.module.less";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pullDown: false
    };
  }

  pullDown() {
    this.setState({ pullDown: !this.state.pullDown });
    console.log("展开");
  }

  render() {
    return (
      <View className={style["pages-detail-logistics"]}>
        <View className={style["pages-detail-logistics-card"]}>
          <Text
            className={[
              style["pages-detail-logistics-card-text"],
              style["p-title"]
            ]}
          >
            订单状态
          </Text>
        </View>
        <View
          className={
            this.state.pullDown === true
              ? style["pages-detail-logistics-goods"]
              : style["pages-detail-logistics-goods-panel"]
          }
        >
          <ShoppingGoodsCard
            title={"这是一个商品标题"}
            src={"https://img.yzcdn.cn/vant/cat.jpeg"}
            details={"这是一个商品规格"}
            margin={false}
            price={890}
            number={10}
          ></ShoppingGoodsCard>
          <ShoppingGoodsCard
            title={"这是一个商品标题"}
            src={"https://img.yzcdn.cn/vant/cat.jpeg"}
            details={"这是一个商品规格"}
            margin={false}
            price={890}
            number={10}
          ></ShoppingGoodsCard>
        </View>
        <View className={style["pages-detail-logistics-goods-pullDown"]}>
          <View
            className={style["pages-detail-logistics-goods-pullDown-divider"]}
            onClick={this.pullDown.bind(this)}
          >
            <View>展开全部</View>
          </View>
        </View>
      </View>
    );
  }
}
