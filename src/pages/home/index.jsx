import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import style from "../../styles/global.module.less"
import { Button } from "@taroify/core"

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text className={style.p-title}>Hello World!</Text>
        <Button color='success'>success</Button>
      </View>
    )
  }
}
