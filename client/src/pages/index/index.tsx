// import { Component, PropsWithChildren } from "react";
// import Taro, { Config } from "@tarojs/taro";
// import { View, Text, Swiper, SwiperItem } from "@tarojs/components";
// import "./index.scss";

// class Index extends Component<PropsWithChildren> {
//   // 生命周期
//   componentDidMount() {}

//   componentWillUnmount() {}

//   componentDidShow() {}

//   componentDidHide() {}

//   render() {
//     return (
//       <View className="index">
//         <Swiper
//           className="test-h"
//           indicatorColor="#999"
//           indicatorActiveColor="#333"
//           vertical
//           circular
//           indicatorDots
//           autoplay
//         >
//           <SwiperItem>
//             <View className="demo-text-1">1</View>
//           </SwiperItem>
//           <SwiperItem>
//             <View className="demo-text-2">2</View>
//           </SwiperItem>
//           <SwiperItem>
//             <View className="demo-text-3">3</View>
//           </SwiperItem>
//         </Swiper>
//       </View>
//     );
//   }
// }

import React, { Component } from "react";
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  SwiperProps,
  SwiperItemProps,
  Image,
  ImageProps,
  CoverImage,
  Input,
  Icon,
} from "@tarojs/components";
import banner from "../../images/banner/banner1.png";
import noodle from "../../images/banner/noodle.jpeg";
import useravt from "../../images/indexflow/useravt.jpg";
import search from "../../images/search.svg";
import "./index.scss";
import Taro from "@tarojs/taro";

export default class Index extends Component {
  // constructor() {
  //   super(...arguments);
  // }
  state = {
    msg: "每日精选",
  };

  componentWillMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View className="searchBar">
          <Input
            className="searchBox"
            type="text"
            placeholder="  输入食材、菜名关键字搜索"
          />
          <button className="searchBtn">搜索</button>
        </View>
        <View>
          <Swiper
            className="test-h"
            indicatorColor="#999"
            indicatorActiveColor="#333"
            // vertical
            circular
            indicatorDots
            autoplay
          >
            {/* <SwiperItem>
              <CoverImage src={banner} className="img" />
            </SwiperItem>
            <SwiperItem>
              <CoverImage src={banner} className="img" />
            </SwiperItem> */}
            {/* <SwiperItem>
            <View className="demo-text-3">banner</View>
          </SwiperItem> */}
          </Swiper>
        </View>
        <View className="featureTopic">
          <Text>{this.state.msg}</Text>
        </View>

        <View className="flowUserInfo">
          <Image className="useravt" src={useravt} />
          <Text className="userNickname">axu</Text>
        </View>
        <View
          onClick={() => {
            Taro.redirectTo({
              url: "../noodleDetails/index",
            });
          }}
        >
          <Image className="noodle" src={noodle} />
        </View>
        <View>
          <button></button>
        </View>
      </View>
    );
  }
}
