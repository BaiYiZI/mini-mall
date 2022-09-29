import { Component } from "react";
import { View, Text, ScrollView } from "@tarojs/components";
import { Tag } from "@taroify/core";
import { Location, Arrow } from "@taroify/icons";
import style from "./index.module.less";

export default class UserOrderCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadow: true,
      shadowNumber: 0
    };
  }

  onScrollToLower() {
    if (this.state.shadow === true) {
      this.setState({ shadow: false, shadowNumber: 0 });
    }
  }

  onScroll() {
    this.state.shadowNumber++;
    if (this.state.shadow === false && this.state.shadowNumber > 10) {
      this.setState({ shadow: true, shadowNumber: 0 });
    }
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
          onScroll={this.onScroll.bind(this)}
          onScrollToLower={this.onScrollToLower.bind(this)}
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
