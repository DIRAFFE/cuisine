import { Component, PropsWithChildren } from "react";
import Taro, { Config } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";

import Login from "../../components/login/index.weapp";

export default class Index extends Component<PropsWithChildren> {
  // 生命周期
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>axu</Text>
        <Button>我的收藏</Button>
        <Button>退出登录</Button>
      </View>
    );
  }
}
