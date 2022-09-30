import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { Tabs, Search, Button } from "@taroify/core";

import { getOrder } from "../../service/service";
import ShoppingGoodsCard from "../../components/card/cart-goods/index";
import style from "./index.module.less";

export default class Index extends Component {
  state = {
    loading: true,
    orderAll: new Array()
  };

  clickChange() {
    let result = [
      {
        orderState: 1
      },
      {
        orderState: 1
      }
    ];

    try {
      this.setState({
        orderAll: result,
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.loading();
  }

  async loading() {
    Taro.showLoading({
      title: "Loading"
    });

    try {
      let result = await getOrder();
      this.setState({
        orderAll: result.data,
      });
    } catch (error) {
      console.log(error);

      this.setState({
        loading: false
      });
    }

    Taro.hideLoading();
  }

  render() {
    return (
      <View>
        <View>
          <Search
            className="background"
            shape="rounded"
            swipeable
            placeholder="请输入搜索关键词" />
        </View>

        <View>
          <Button color="success" onClick={this.clickChange.bind(this)}>button</Button>
        </View>

        <View style={{ backgroundColor: "aqua" }}>
          <Tabs animated swipeable className={style["color"]}>
            <Tabs.TabPane title="全部">
              {
                this.state.orderAll.map(val => {
                  return (
                    <ShoppingGoodsCard
                      title={"all"}
                      src={"https://img.yzcdn.cn/vant/cat.jpeg"}
                      details={"这是一个商品规格"}
                      price={890}
                      number={10}
                    ></ShoppingGoodsCard>
                  )
                })
              }
            </Tabs.TabPane>
            <Tabs.TabPane title="待收货">
              {
                this.state.orderAll.map(val => {
                  if (val.orderState == 1) {
                    return (
                      <ShoppingGoodsCard
                        title={1}
                        src={"https://img.yzcdn.cn/vant/cat.jpeg"}
                        details={"这是一个商品规格"}
                        price={890}
                        number={10}
                      ></ShoppingGoodsCard>
                    )
                  }
                })
              }
            </Tabs.TabPane>
            <Tabs.TabPane title="已收货">
              {
                this.state.orderAll.map(val => {
                  if (val.orderState == 2) {
                    return (
                      <ShoppingGoodsCard
                        title={2}
                        src={"https://img.yzcdn.cn/vant/cat.jpeg"}
                        details={"这是一个商品规格"}
                        price={890}
                        number={10}
                      ></ShoppingGoodsCard>
                    )
                  }
                })
              }
            </Tabs.TabPane>
          </Tabs>
        </View>
      </View>

    )
  }
}