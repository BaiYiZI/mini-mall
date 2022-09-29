import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { Button } from "@taroify/core"
import { LocationOutlined, Checked } from "@taroify/icons"

import style from "./index.module.less";
import ShoppingGoodsCard from "../../components/card/cart-goods"

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            top: false,
            price: 800000,
            addressInfo: {
                userName: "",
                telNumber: "",
                detailInfo: "",
                provinceName: "",
                cityName: "",
                countyName: ""
            }
        }
    }

    chooseAddress() {
        wx.chooseAddress({
            success: (res) => {
                this.setState({
                    addressInfo: res
                })
            },
            fail: function (err) {
                console.log(err)
            }
        })
        this.setState({ top: true })
    }

    render() {
        const { price } = this.state;
        const top = (
            <View className={style["address"]}>
                <View className={style["location"]}>
                    <LocationOutlined size={"24"} className={style["loc-icons"]} />
                    <Text className={style["Approximate-location"]}>
                        {this.state.addressInfo.provinceName}
                        {this.state.addressInfo.cityName}
                        {this.state.addressInfo.countyName}
                    </Text>
                </View>
                <>
                    <View className={style["shipping-address"]}>
                        <Text>
                            收货地址：
                            <Text className={style["details"]}>{this.state.addressInfo.detailInfo}</Text>
                        </Text>
                    </View>
                    <View className={style["consignee"]}>
                        <Text>收货人：<Text className={style["details"]}>{this.state.addressInfo.userName}</Text></Text>
                    </View>
                    <View className={style["Mobile-Phone"]}>
                        <Text>手机号码：<Text className={style["details"]}>{this.state.addressInfo.telNumber}</Text></Text>
                    </View>
                </>
            </View>
        )

        const isNull = (
            <View className={style["address"]}>
                <View className={style["not-state"]}>
                    <Text>点击当前卡片获取地址</Text>
                </View>
            </View>
        )

        let current = [];
        for (let i = 1; i < 10; i++) {
            current.push(
                <ShoppingGoodsCard
                    title={"这是一个商品标题"}
                    src={"https://img.yzcdn.cn/vant/cat.jpeg"}
                    details={"这是一个商品规格"}
                    circleClick={value => console.log(`当前状态：${value}`)}
                    stepperClick={value => console.log(`当前值：${value}`)}
                    price={800}
                    number={10}
                    stepper={true}
                />);
        }
        return (
            <View className={style["page"]}>
                <View className={style["vCard"]}
                    onClick={this.chooseAddress.bind(this)}
                >
                    <View className={style["title"]}>
                        <Text className={style["word"]}>
                            订单地址
                        </Text>
                    </View>
                    {this.state.top == false ? isNull : top}
                </View>
                <View className={style["quantity"]}>
                    <Text>商品</Text>
                </View>

                {current}

                <View className={style["frame"]}>
                    <View className={style["prompt"]}>
                        <Checked size="30px" color="green" className={style["p-Checked"]} />
                        <Text className={style["p-prompt"]}>如您购买的商品有任何问题，请与客服联系，门店会为您处理，让您售后无忧</Text>
                    </View>
                </View>

                <View className={style["Order-Confirmation-sticky"]}>
                    <View className={style["Order-Confirmation"]}>
                        <View className={style["Amount"]}>
                            <Text>合计：</Text>
                            <Text className={style["sum"]}>￥ {price}</Text>
                            <View className={style["confirmButton"]}>
                                <Button variant="contained" color="danger" shape="round">确认订单</Button>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}