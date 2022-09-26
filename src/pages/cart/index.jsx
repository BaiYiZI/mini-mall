import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import ShoppingGoodsCard from "../../components/card/cart-goods";
import style from "./index.module.less";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 10,
      loading: true,
      topText: true,
      bottomeCircle: false
    };
  }

  reverse(stateName) {
    this.setState({
      [stateName]: !this.state[stateName]
    });
  }

  settlement() {
    console.log("结算");
  }

  setBottomeCircle(value) {
    this.reverse(value);
    console.log("全选");
  }

  render() {
    const cartTop = (
      <View className={style["pages-cart-top"]}>
        <Text className={style["pages-cart-top-title"]}>
          商品库存有限请尽快下单！
        </Text>
        <Text
          className={style["pages-cart-top-edit"]}
          onClick={this.reverse.bind(this, "topText")}
        >
          {this.state.topText === true ? "编辑" : "完成"}
        </Text>
      </View>
    );
    const settlementPrice = (
      <>
        <Text className={style["pages-cart-bottom-settlement-right-price"]}>
          8923
        </Text>
        <Text className={style["pages-cart-bottom-settlement-right-symbol"]}>
          ¥
        </Text>
      </>
    );
    const cartSettlement = (
      <View className={style["pages-cart-bottom-settlement"]}>
        <View className={style["pages-cart-bottom-settlement-left"]}>
          <View
            className={
              style[
                this.state.bottomeCircle === false
                  ? "pages-cart-bottom-settlement-left-unselected"
                  : "pages-cart-bottom-settlement-left-selected"
              ]
            }
            onClick={this.setBottomeCircle.bind(this, "bottomeCircle")}
          ></View>
          <Text className={style["pages-cart-bottom-settlement-text"]}>
            全选
          </Text>
        </View>
        <View className={style["pages-cart-bottom-settlement-right"]}>
          <Button
            className={style["pages-cart-bottom-settlement-right-button"]}
            onClick={this.settlement.bind(this)}
          >
            {this.state.topText === true ? "结算" : "删除"}
          </Button>
          {this.state.topText && settlementPrice}
        </View>
      </View>
    );
    return (
      <View className={style["pages-cart"]}>
        {cartTop}
        <ShoppingGoodsCard
          circle={this.circle}
          circleClick={value => console.log(`当前状态：${value}`)}
          stepperClick={value => this.setState({ number: value })}
          title={"这是一个商品标题"}
          src={"https://img.yzcdn.cn/vant/cat.jpeg"}
          details={"这是一个商品规格"}
          price={890 * this.state.number}
          picker={true}
          stepper={true}
          number={this.state.number}
        />
        {cartSettlement}
      </View>
    );
  }
}
