import { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import {
  Image,
  Flex,
  Skeleton,
  WhiteSpace,
  Tabs,
  Backdrop,
  Space,
  Button,
  Empty
} from "@taroify/core";

import { getBanner, getKinds, getGoodsInfoByKind } from "../../service/service";

import GoodsCard from "../../components/card/goods/index";
import style from "./index.module.less";

export default class Index extends Component {
  state = {
    banner: "",
    goodsInfo: [],
    kinds: [],
    currentKind: "",
    currentKindChildren: "",
    open: false,
    loading: true,
    loadingFaild: false
  };

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

    try {
      let banner = await getBanner();
      let kinds = await getKinds();

      let currentKind = kinds.data[0].kind;
      let currentKindChildren = kinds.data[0].children[0];

      let goodsInfo = await getGoodsInfoByKind(currentKindChildren);

      this.setState({
        banner: banner.data[0],
        goodsInfo: goodsInfo.data,
        kinds: kinds.data,
        currentKind,
        currentKindChildren,
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

  changeKind(value) {
    this.setState({
      currentKind: value
    });

    let children = this.state.kinds.filter(item => {
      return item.kind == value;
    })[0].children[0];
    this.changeKindChildren(children);
  }

  async changeKindChildren(value) {
    let goodsInfo = await getGoodsInfoByKind(value);

    this.setState({
      currentKindChildren: value,
      goodsInfo: goodsInfo.data
    });
  }

  navigateToGoods(id) {
    Taro.navigateTo({
      url: "/pages/detail/goods/index?goodsId=" + id
    });
  }

  navigateToCart(id) {
    Taro.switchTab({
      url: "/pages/cart/index?goodsId=" + id + "&count=1"
    });
  }

  render() {
    let loading = this.state.loading;
    let loadingFaild = this.state.loadingFaild;
    let banner = "";
    let goodsList = [];
    let tabs = [];
    let kindButtons = [];

    if (!loading && !loadingFaild) {
      banner = this.state.banner;

      tabs = this.state.kinds
        .filter(item => {
          return item.kind == this.state.currentKind;
        })[0]
        .children.map(item => {
          return (
            <Tabs.TabPane key={item} value={item} title={item}></Tabs.TabPane>
          );
        });

      kindButtons = this.state.kinds
        .filter(item => {
          return item.kind != this.state.currentKind;
        })
        .map(item => {
          return (
            <Button
              key={item.kind}
              color=""
              shape="round"
              onClick={() => this.changeKind(item.kind)}
              className={style["kind-button"]}
            >
              {item.kind}
            </Button>
          );
        });

      let leftList = [];
      let rightList = [];
      this.state.goodsInfo.forEach((item, index) => {
        if (index % 2 == 0) {
          leftList.push(
            <GoodsCard
              key={item.title}
              title={item.title}
              img={item.img}
              price={item.price}
              toGoods={() => this.navigateToGoods(item.id)}
              toCart={() => this.navigateToCart(item.id)}
              className={style["goods-card"]}
            />
          );
        } else {
          rightList.push(
            <GoodsCard
              key={item.title}
              title={item.title}
              img={item.img}
              price={item.price}
              toGoods={() => this.navigateToGoods(item.id)}
              toCart={() => this.navigateToCart(item.id)}
              className={style["goods-card"]}
            />
          );
        }
      });

      goodsList = (
        <Flex direction="row" gutter="12">
          <Flex.Item direction="column" span="12">
              {leftList}
          </Flex.Item>
          <Flex.Item direction="column" span="12">
              {rightList}
          </Flex.Item>
        </Flex>
      );
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
            <Empty.Image src="error" />
            <Empty.Description>
              网络错误,请检查网络后下拉刷新页面。
            </Empty.Description>
          </Empty>
        ) : loading ? (
          <>
            <Flex
              direction="column"
              justify="center"
              align="center"
              className={style["banner"]}
            >
              <WhiteSpace />
              <Skeleton style={{ width: "100%", height: "90%" }} />
              <WhiteSpace />
            </Flex>

            <Flex direction="column" justify="center" align="center">
              {skeletons}
              <WhiteSpace />
              {skeletons}
            </Flex>
          </>
        ) : (
          <>
            <Image
              className={style["banner"]}
              src={banner}
              mode="hightFix"
              placeholder="加载中..."
              fallback="加载失败"
            />
            <Flex direction="row" align="center" className={style["tab-bar"]}>
              <Flex.Item
                span="5"
                justify="center"
                align="center"
                className={[style["main-classif"], style["p-normal"]]}
                onClick={() => this.setState({ open: true })}
              >
                {this.state.currentKind}
              </Flex.Item>
              <Flex.Item span="18">
                <Tabs
                  animated
                  swipeable
                  ellipsis={false}
                  value={this.state.currentKindChildren}
                  defaultValue={this.state.currentKindChildren}
                  onChange={value => this.changeKindChildren(value)}
                  style={{ height: "100%" }}
                >
                  {tabs}
                </Tabs>
              </Flex.Item>
            </Flex>
            <Backdrop
              open={this.state.open}
              closeable
              onClose={() => this.setState({ open: false })}
            >
              <View className={style["content-wrapper"]}>
                <Space className={style["content-block"]} size="small">
                  {kindButtons}
                </Space>
              </View>
            </Backdrop>
            <View className={style["goods-list"]}>
            {goodsList}
            </View>
          </>
        )}
      </View>
    );
  }
}
