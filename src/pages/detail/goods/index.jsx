import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { Button } from "@taroify/core";
export default class Index extends Component {
  onLoad(options) {
    console.log(options)
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Button color="primary">Hello world!</Button>
      </View>
    );
  }
}
