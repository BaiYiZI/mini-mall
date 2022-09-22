import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { Image, Stepper } from "@taroify/core";
import style from "./index.module.less";

export default class ShoppingGoodsCard extends Component {
  constructor(props) {
    super(props);
    this.circle = false;
  }

  circletEvevnt() {
    const { circleClick } = this.props;
    this.circle = !this.circle;
    circleClick(this.circle);
    this.setState({});
  }

  stepperEvent(value) {
    const { stepperClick } = this.props;
    stepperClick(value);
  }

  render() {
    const { src, title, details, price, picker, stepper, number } = this.props;
    return (
      <View className={style["components-cart-goods"]}>
        {picker && (
          <View
            className={style["components-cart-goods-left"]}
            onClick={this.circletEvevnt.bind(this)}
          >
            <View
              className={
                style[
                  this.circle === false
                    ? "cart-goods-unselected"
                    : "cart-goods-selected"
                ]
              }
            ></View>
          </View>
        )}
        <View
          className={
            picker === true
              ? style["components-cart-goods-middle"]
              : style["components-cart-goods-middle-margin"]
          }
        >
          <Image
            className={style["components-cart-goods-middle-image"]}
            src={src}
          />
        </View>
        <View className={style["components-cart-goods-right"]}>
          <View className={style["components-cart-goods-right-details"]}>
            <Text
              className={[
                style["components-cart-goods-right-details-title"],
                style["p-title"]
              ]}
            >
              {title}
            </Text>
            <View className={style["components-cart-goods-right-details-sku"]}>
              <Text className={style["p-normal"]}>{details}</Text>
            </View>
          </View>
          <View className={style["components-cart-goods-right-price"]}>
            <Text
              className={[
                style["components-cart-goods-right-price-symbol"],
                style["p-price"]
              ]}
            >
              ¥
            </Text>
            <Text
              className={[
                style["components-cart-goods-right-price-number"],
                style["p-price"]
              ]}
            >
              {price}
            </Text>
            {stepper === true ? (
              <Stepper
                className={style["components-cart-goods-right-price-Stepper"]}
                onChange={value => this.stepperEvent(value)}
                defaultValue={number}
              ></Stepper>
            ) : (
              <View
                className={style["components-cart-goods-right-goods-number"]}
              >
                <Text
                  className={
                    style["components-cart-goods-right-goods-number-text"]
                  }
                >
                  x
                </Text>
                <Text className={style["p-normal"]}>
                  {number === undefined ? 0 : number}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}
