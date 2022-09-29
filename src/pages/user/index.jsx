// import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { Avatar } from "@taroify/core";
import {
  LabelOutlined,
  BagOutlined,
  Passed,
  ServiceOutlined
} from "@taroify/icons";
import ShoppingGoodsCard from "../../components/card/cart-goods";
import UserOrderCart from "../../components/card/order-card";
import style from "./index.module.less";

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View className={style["pages-user"]}>
        <View className={style["pages-user-top"]}>
          <View className={style["pages-user-top-top"]}>
            <Avatar size="large" style={{ background: "pink" }}>
              HP
            </Avatar>
            <Text className={style["pages-user-top-top-text"]}>王富贵</Text>
          </View>
          <View className={style["pages-user-top-bottom"]}>
            <View className={style["pages-user-top-bottom-icon"]}>
              <LabelOutlined size="28" />
              <Text className={style["pages-user-top-bottom-text"]}>
                全部订单
              </Text>
            </View>
            <View className={style["pages-user-top-bottom-icon"]}>
              <BagOutlined size="28" />
              <Text className={style["pages-user-top-bottom-text"]}>
                待收货
              </Text>
            </View>
            <View className={style["pages-user-top-bottom-icon"]}>
              <Passed size="28" />
              <Text className={style["pages-user-top-bottom-text"]}>
                已收货
              </Text>
            </View>
            <View className={style["pages-user-top-bottom-icon"]}>
              <ServiceOutlined size="28" />
              <Text className={style["pages-user-top-bottom-text"]}>客服</Text>
            </View>
          </View>
        </View>
        <UserOrderCart
          date={"2022-09-19"}
          logistics={"这是一条物流信息"}
          price={890}
          order={"10"}
          childrens={
            <>
              <ShoppingGoodsCard
                title={"这是一个商品标题"}
                src={"https://img.yzcdn.cn/vant/cat.jpeg"}
                details={"这是一个商品规格"}
                circleClick={value => console.log(`当前状态：${value}`)}
                stepperClick={value => console.log(`当前值：${value}`)}
                price={7.9}
                number={10}
                stepper={false}
                margin={false}
              />
            </>
          }
        ></UserOrderCart>
      </View>
    );
  }
}
