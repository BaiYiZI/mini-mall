import { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

import GoodsCard from "../../components/card/goods/index";

import { getBanner, getKinds } from "../../service/home";
import { getGoodsInfoByKind } from "../../service/goods";

import style from "./index.module.less";
import {
  Image,
  Flex,
  Skeleton,
  WhiteSpace,
  Tabs,
  Backdrop,
  Space,
  Button,
} from "@taroify/core";

export default class Index extends Component {
  state = {
    banner: "",
    goodsInfo: [],
    loading: true,
    kinds: [],
    currentKind: "",
    currentKindChildren: "",
    open: false
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

  navigateTo(id) {
    Taro.navigateTo({
      url: "/pages/detail/goods/index?goodsId=" + id
    });
  }

  render() {
    let loading = this.state.loading;
    let banner = "";
    let goodsList = [];
    let tabs = [];
    let kindButtons = [];

    if (!loading) {
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

      goodsList = this.state.goodsInfo.map(item => {
        return (
          <GoodsCard
            key={item.title}
            title={item.title}
            img={item.img}
            price={item.price}
            onClick={() => this.navigateTo(item.id)}
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
        {this.state.loading ? (
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
            <View className={style["goods-list"]}>{goodsList}</View>
          </>
        )}
      </View>
    );
  }
}
