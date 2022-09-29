import { Component } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View } from "@tarojs/components";
import {
  Image,
  Flex,
  Skeleton,
  WhiteSpace,
  Swiper,
  Stepper,
  Divider,
  Sticky,
  Button,
  Empty
} from "@taroify/core";
import { CartOutlined, ChatOutlined, ShopOutlined } from "@taroify/icons";

import { getGoodsDteailInfoById } from "../../../service/service";
import style from "./index.module.less";
export default class Index extends Component {
  state = {
    goodsId: "",
    goodsDetailInfo: {
      kind: "",
      title: "",
      stock: "0",
      create_time: ""
    },
    count: 1,
    swiperSet: 0,
    loading: true,
    loadingFaild: false
  };

  current = getCurrentInstance();

  componentDidMount() {
    this.loading();
  }

  async onPullDownRefresh() {
    Taro.startPullDownRefresh();
    this.setState({
      loading: true
    });
    await this.loading();
    Taro.stopPullDownRefresh();
  }

  async loading() {
    Taro.showLoading({
      title: "Loading"
    });

    let id = this.current.router.params.goodsId;
    let testingId = "100005";

    this.setState({
      // dev testing
      goodsId: testingId
    });

    try {
      let res = await getGoodsDteailInfoById(testingId);
      this.setState({
        goodsDetailInfo: res.data[0],
        loading: false
      });
    } catch (error) {
      console.log(error);

      this.setState({
        loadingFaild: true,
        loading: false
      });
    }

    Taro.hideLoading();
  }

  setSwiper(index) {
    this.setState({
      swiperSet: index
    });
  }

  navigateToHome() {
    Taro.switchTab({
      url: "/pages/home/index"
    });
  }

  navigateToCart() {
    Taro.switchTab({
      url: "/pages/cart/index"
    });
  }

  addToCart(id, count) {
    Taro.switchTab({
      url: "/pages/cart/index?goodsId=" + id + "&count=" + count
    });
  }

  createOrder(id, count) {
    Taro.navigateTo({
      url: "/pages/pay/index?goodsId=" + id + "&count=" + count
    });
  }

  render() {
    let loading = this.state.loading;
    let loadingFaild = this.state.loadingFaild;
    let goodsDetailInfo = this.state.goodsDetailInfo;
    let swiper = [];
    let detailImages = [];

    if (!loading && !loadingFaild) {
      swiper = this.state.goodsDetailInfo.imgs.map(item => {
        return (
          <Swiper.Item className={style["swiper-item"]}>
            <Image
              mode="scaleToFill"
              src={item}
              placeholder="加载中..."
              fallback="加载失败"
            />
          </Swiper.Item>
        );
      });

      detailImages = this.state.goodsDetailInfo.detail_imgs.map(item => {
        return (
          <Image
            mode="widthFix"
            src={item}
            placeholder="加载中..."
            fallback="加载失败"
          />
        );
      });
    }

    let skeletons = [];
    for (let i = 0; i < 4; i++) {
      skeletons.push(<WhiteSpace />);
      skeletons.push(<Skeleton style={{ width: "90%" }} />);
    }

    return (
      <View className="index">
        {loadingFaild ? (
          <Empty>
            <Empty.Image src="network" />
            <Empty.Description>
              网络错误,请检查网络后下拉刷新页面。
            </Empty.Description>
          </Empty>
        ) : loading ? (
          <Flex direction="column" justify="center" align="center">
            <Skeleton style={{ width: "100vw", height: "100vw" }} />
            {skeletons}
          </Flex>
        ) : (
          <>
            <Swiper
              autoplay={4000}
              onChange={index => this.setSwiper(index)}
              className={style["swiper"]}
            >
              {swiper}
              <Swiper.Indicator className={style["custom-indicator"]}>
                {this.state.swiperSet + 1} / 4
              </Swiper.Indicator>
            </Swiper>

            <Flex direction="row" align="center" className={style["price-box"]}>
              <Flex.Item span="16">
                <View className={style["price"]}>
                  ￥{goodsDetailInfo.price}
                </View>
              </Flex.Item>
              <Flex className={style["stock"]} direction="row" justify="end">
                剩余库存: {goodsDetailInfo.stock}
              </Flex>
            </Flex>

            <Flex direction="column" className={style["title-box"]}>
              <Flex.Item span="22" className={style["title"]}>
                <View>{goodsDetailInfo.title}</View>
              </Flex.Item>
              <Flex.Item>
                <Flex>
                  <View style={{ width: "72vw" }}></View>
                  <Stepper
                    min={1}
                    max={99}
                    onChange={value => this.setState({ count: value })}
                  ></Stepper>
                </Flex>
                <View style={{ width: "100vw", height: "2vh" }}></View>
              </Flex.Item>
            </Flex>
            <View className={style["goods-detail"]}>
              <Divider className={style["divider-title"]} dashed>
                商品详情
              </Divider>
              <Flex direction="column" className={style["goods-detail-list"]}>
                <Flex
                  direction="row"
                  gutter="24"
                  className={style["goods-detail-item"]}
                >
                  <Flex.Item>商品名称</Flex.Item>
                  <Flex.Item>{goodsDetailInfo.title}</Flex.Item>
                </Flex>
                <Flex
                  direction="row"
                  gutter="24"
                  className={style["goods-detail-item"]}
                >
                  <Flex.Item>上架时间</Flex.Item>
                  <Flex.Item>2022-06-03</Flex.Item>
                </Flex>
                <Flex
                  direction="row"
                  gutter="24"
                  className={style["goods-detail-item"]}
                >
                  <Flex.Item>商品类型</Flex.Item>
                  <Flex.Item>{goodsDetailInfo.kind}</Flex.Item>
                </Flex>
              </Flex>
              <Divider className={style["divider-title"]} dashed>
                图文详情
              </Divider>
              <Flex direction="column">{detailImages}</Flex>
            </View>
            <Sticky position="bottom">
              <Flex
                direction="row"
                align="center"
                className={style["bottom-bar"]}
              >
                <Flex.Item span="3" className={style["bottom-item"]}>
                  <Button
                    size="large"
                    variant="text"
                    open-type="contact"
                    plain="true"
                    icon={<ChatOutlined size="24px" color={style["ashen"]} />}
                  />
                </Flex.Item>
                <Flex.Item span="3" className={style["bottom-item"]}>
                  <Button
                    size="large"
                    variant="text"
                    plain="true"
                    onClick={() => this.navigateToCart()}
                    icon={<CartOutlined size="24px" color={style["ashen"]} />}
                  />
                </Flex.Item>
                <Flex.Item span="4" className={style["bottom-item"]}>
                  <Button
                    size="large"
                    variant="text"
                    plain="true"
                    onClick={() => this.navigateToHome()}
                    icon={<ShopOutlined size="24px" color={style["ashen"]} />}
                  />
                </Flex.Item>
                <Flex.Item span="7">
                  <Button
                    onClick={() => {
                      this.addToCart(this.state.goodsId, this.state.count);
                    }}
                    className={style["bottom-button-cart"]}
                  >
                    加入购物车
                  </Button>
                </Flex.Item>
                <Flex.Item span="7">
                  <Button
                    onClick={() => {
                      this.createOrder(this.state.goodsId, this.state.count);
                    }}
                    className={style["bottom-button-pay"]}
                  >
                    立即购买
                  </Button>
                </Flex.Item>
              </Flex>
            </Sticky>
          </>
        )}
      </View>
    );
  }
}
