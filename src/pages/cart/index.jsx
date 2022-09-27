import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import { getShoppings } from "../../service/cart";
import ShoppingGoodsCard from "../../components/card/cart-goods";
import style from "./index.module.less";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      topText: true,
      bottomeCircle: false,
      cardData: new Array()
    };
  }

  componentDidMount() {
    this.loading();
  }

  // async onPullDownRefresh() {
  //   Taro.startPullDownRefresh();
  //   this.setState({
  //     loading: true
  //   });
  //   await this.loading();
  //   Taro.stopPullDownRefresh();
  // }

  async loading() {
    Taro.showLoading({
      title: "Loading"
    });

    let arr = new Array();

    let shoppingInfos = await getShoppings();

    for (let temp of shoppingInfos.data) {
      arr.push({
        id: temp.id,
        img: temp.img,
        kind: temp.kind,
        number: temp.number,
        price: temp.price,
        title: temp.title,
        select: false
      });
    }

    this.setState({
      loading: true,
      topText: true,
      bottomeCircle: false,
      cardData: arr
    });

    Taro.hideLoading();
  }

  reverse(stateName) {
    this.setState({
      [stateName]: !this.state[stateName]
    });
  }

  settlement() {
    console.log(this.state.cardData);
  }

  setBottomeCircle(value) {
    this.state.cardData.map(val => (val.select = !this.state.bottomeCircle));
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
        {this.state.cardData.map(val => {
          const isBelowThreshold = currentValue => currentValue === true;
          return (
            <ShoppingGoodsCard
              circle={val.select}
              circleClick={value => {
                val.select = !value;
                // this.setState({});
                if (
                  this.state.cardData.map(a => a.select).every(isBelowThreshold)
                ) {
                  this.setState({ bottomeCircle: true });
                } else {
                  this.setState({ bottomeCircle: false });
                }
              }}
              stepperClick={value => {
                val.number = value;
                this.setState({});
              }}
              title={val.title}
              src={val.img}
              details={val.kind}
              number={val.number}
              price={val.price * val.number}
              picker={true}
              stepper={true}
            />
          );
        })}
        {cartSettlement}
        <View className={style["pages-cart-bottom-Placeholder"]}></View>
      </View>
    );
  }
}
