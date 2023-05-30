import { Component, PropsWithChildren } from "react";
import Taro, { Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

import Login from "../../components/login/index.weapp";

export default class Index extends Component<PropsWithChildren> {
  // 生命周期
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="index">home</View>;
  }
}
