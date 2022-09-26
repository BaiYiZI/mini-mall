import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { Flex, Divider, Sticky } from "@taroify/core";
import { LocationOutlined, Logistics, ServiceOutlined, CashBackRecord } from "@taroify/icons";

import ShoppingGoodsCard from "../../../components/card/cart-goods/index";
import style from "./index.module.less";

export default class Index extends Component {
  render() {
    return (
      <View>
        <Flex
          justify="center"
          align="center"
          className={style["state-box"]}
        >
          <Flex.Item>
            <Text className={style["state-text"]}>订单已完成</Text>
          </Flex.Item>
        </Flex>

        <Flex className={style["title"]}>
          <Flex.Item>
            <Text className={[style["title-text"]]}>物流信息</Text>
          </Flex.Item>
        </Flex>
        <Flex
          className={style["card"]}
          direction="column"
        >
          <Flex.Item>
            <Flex>
              <Flex.Item>
                <LocationOutlined size="32" className={style["icon"]} />
              </Flex.Item>
              <Flex.Item className={style["left-space"]}>
                <Flex
                  direction="column"
                  justify="space-between"
                >
                  <Flex.Item className={style["body-text"]}>
                    <Text>我到未来石了, 快来拿吧！我到未来石了, 快来拿吧</Text>
                  </Flex.Item>
                  <Flex.Item className={style["retouch-text"]}>
                    <Text>2022-06-01 19:05:19</Text>
                  </Flex.Item>
                </Flex>
              </Flex.Item>
            </Flex>
          </Flex.Item>
          <Flex.Item>
            <Divider className={style.divider}></Divider>
          </Flex.Item>
          <Flex.Item>
            <Flex>
              <Flex.Item>
                <Logistics size="32" className={style["icon"]} />
              </Flex.Item>
              <Flex.Item className={style["left-space"]}>
                <Flex direction="column">
                  <Flex.Item
                    className={style["body-text"]}
                    justify="space-between">
                    <Text>白忆子 111****1111</Text>
                  </Flex.Item>
                  <Flex.Item className={style["retouch-text"]}>
                    <Text>河北省保定市</Text>
                  </Flex.Item>
                </Flex>
              </Flex.Item>
            </Flex>
          </Flex.Item>
        </Flex>
        <Flex
          className={style["title"]}
        >
          <Flex.Item >
            <Text className={[style["title-text"]]}>订单信息</Text>
          </Flex.Item>
        </Flex>
        <Flex
          className={style["card"]}
          direction="column"
          justify="space-between"
        >
          <Flex.Item className={style["order-left-space"]}>
            <Text className={style["body-text"]}>支付时间:</Text>
            <Text className={[style["body-text"], style["left-space"]]}>2022-06-01 19:05:19</Text>
          </Flex.Item>
          <Flex.Item style={{ height: "16px" }}></Flex.Item>
          <Flex.Item className={style["order-left-space"]}>
            <Text className={style["body-text"]}>配送方式:</Text>
            <Text className={[style["body-text"], style["left-space"]]}>自己上门取</Text>
          </Flex.Item>
        </Flex>
        <Flex
          className={style["title"]}
        >
          <Flex.Item >
            <Text className={[style["title-text"]]}>商品信息</Text>
          </Flex.Item>
        </Flex>
        <ShoppingGoodsCard
          title={"这是一个商品标题"}
          src={"https://img.yzcdn.cn/vant/cat.jpeg"}
          details={"这是一个商品规格"}
          price={890}
          number={10}
        ></ShoppingGoodsCard>
        <ShoppingGoodsCard
          title={"这是一个商品标题"}
          src={"https://img.yzcdn.cn/vant/cat.jpeg"}
          details={"这是一个商品规格"}
          price={890}
          number={10}
        ></ShoppingGoodsCard>
        <ShoppingGoodsCard
          title={"这是一个商品标题"}
          src={"https://img.yzcdn.cn/vant/cat.jpeg"}
          details={"这是一个商品规格"}
          price={890}
          number={10}
        ></ShoppingGoodsCard>

        <View className={style["placeholder"]}></View>

        <View>
          <Flex
            className={style["bottom-card"]}
            direction="column">
            <Flex.Item style={{ width: "100%" }}>
              <Flex
                justify="space-between"
                align="center"
                className={style["bottom-left-space"]}>
                <Flex.Item>
                  <Flex>
                    <Flex.Item>
                      <Flex
                        direction="column"
                        align="end"
                        className={style["body-text"]}>
                        <Flex.Item>
                          <Text>商品金额:</Text>
                        </Flex.Item>
                        <Flex.Item style={{ height: "8px" }}></Flex.Item>
                        <Flex.Item>
                          <Text>运费:</Text>
                        </Flex.Item>
                      </Flex>
                    </Flex.Item>
                    <Flex.Item>
                      <Flex
                        direction="column"
                        className={[style["body-text"], style["left-space"]]}>
                        <Flex.Item>
                          <CashBackRecord className={style["icon"]} />
                          <Text> 100</Text>
                        </Flex.Item>
                        <Flex.Item style={{ height: "8px" }}></Flex.Item>
                        <Flex.Item>
                          <CashBackRecord className={style["icon"]} />
                          <Text> 20.03</Text>
                        </Flex.Item>
                      </Flex>
                    </Flex.Item>
                  </Flex>
                </Flex.Item>
                <Flex.Item>
                  <Flex>
                    <Flex.Item>
                      <ServiceOutlined
                        size="32"
                        className={style["icon"]}
                        style={{ border: "1px solid red", borderRadius: "50%", padding: "4px" }} />
                    </Flex.Item>
                  </Flex>
                </Flex.Item>
              </Flex>
            </Flex.Item>
            <Flex.Item>
              <Divider className={style["divider"]} />
            </Flex.Item>
            <Flex.Item>
              <Flex
                justify="space-between"
                align="center"
                className={style["bottom-left-space"]}>
                <Flex.Item>
                  <Flex>
                    <Flex.Item>
                      <Flex
                        direction="column"
                        align="end"
                        className={style["body-text"]}>
                        <Flex.Item>
                          <Text>实付金额:</Text>
                        </Flex.Item>
                      </Flex>
                    </Flex.Item>
                    <Flex.Item>
                      <Flex
                        direction="column"
                        className={[style["body-text"], style["left-space"]]}>
                        <Flex.Item>
                          <CashBackRecord className={style["icon"]} />
                          <Text> 100</Text>
                        </Flex.Item>
                      </Flex>
                    </Flex.Item>
                  </Flex>
                </Flex.Item>
              </Flex>
            </Flex.Item>
          </Flex>
        </View>
      </View>
    )
  }
}