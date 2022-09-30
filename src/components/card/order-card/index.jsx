import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, ScrollView } from "@tarojs/components";
import { Tag } from "@taroify/core";
import { Location, Arrow } from "@taroify/icons";
import style from "./index.module.less";

export default class UserOrderCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadow: true
    };
  }

  onScrollToLowerFuc() {
    this.setState({ shadow: false });
  }

  onScrollToUpperFuc() {
    this.setState({ shadow: true });
  }

  logisticsDetails() {
    Taro.navigateTo({
      url: "/pages/detail/logistics/index?id=1"
    });
  }

  render() {
    const { date, logistics, price, order } = this.props;
    let colorState = "";
    let childrenState = "";
    switch (order) {
      case "10":
        colorState = "warning";
        childrenState = "待付款";
        break;
      case "20":
        colorState = "primary";
        childrenState = "待收货";
        break;
      case "30":
        colorState = "info";
        childrenState = "待发货";
        break;
      case "40":
        colorState = "success";
        childrenState = "已完成";
        break;
      case "50":
        colorState = "danger";
        childrenState = "已失效";
        break;
      default:
        colorState = "danger";
        childrenState = "已失效";
        break;
    }
    let numberState = false;
    if (this.props.childrens.props.children.length > 1) {
      numberState = true;
    }
    return (
      <>
        <View className={style["components-order-card-top"]}>
          <View className={style["components-order-card-top-middle"]}>
            <View className={style["components-order-card-top-middle-left"]}>
              <Text
                className={style["components-order-card-top-middle-left-date"]}
              >
                {date}
              </Text>
              <Location
                className={style["components-order-card-top-middle-left-icon"]}
              />
              <Text
                className={
                  style["components-order-card-top-middle-left-logistics"]
                }
                onClick={this.logisticsDetails.bind(this)}
              >
                {logistics}
              </Text>
            </View>
            <Tag size="large" color={colorState}>
              {childrenState}
            </Tag>
          </View>
        </View>
        <ScrollView
          scrollY
          scrollWithAnimation
          className={
            numberState === false
              ? style["components-order-card-move-min"]
              : style["components-order-card-move-max"]
          }
          onScrollToUpper={this.onScrollToUpperFuc.bind(this)}
          onScrollToLower={this.onScrollToLowerFuc.bind(this)}
        >
          {this.props.childrens}
        </ScrollView>
        <View
          className={[
            style["components-order-card-middle"],
            this.state.shadow === true && numberState === true
              ? style["components-order-card-middle-shadow"]
              : style[""]
          ]}
        >
          <View className={style["components-order-card-middle-middle"]}>
            <View className={style["components-order-card-middle-middle-left"]}>
              <Text>实付总金额：</Text>
              <Text
                className={
                  style["components-order-card-middle-middle-left-symbol"]
                }
              >
                ¥
              </Text>
              <Text
                className={
                  style["components-order-card-middle-middle-left-price"]
                }
              >
                {price}
              </Text>
            </View>
            <View
              className={style["components-order-card-middle-middle-right"]}
              onclick={this.logisticsDetails.bind(this)}
            >
              <Text
                className={
                  style["components-order-card-middle-middle-right-logistics"]
                }
              >
                物流详情
              </Text>
              <Arrow
                className={
                  style["components-order-card-middle-middle-right-arrow"]
                }
              />
            </View>
          </View>
        </View>
        <View className={style["components-order-card-bottom"]}>
          <Text className={style["components-order-card-bottom-text"]}>
            查看详情
          </Text>
          <Arrow className={style["components-order-card-bottom-arrow"]} />
        </View>
      </>
    );
  }
}
