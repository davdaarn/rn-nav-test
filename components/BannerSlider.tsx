import React from 'react'
import { View, Text, Image } from 'react-native'

const BannerSlider = ({ data }) => {
  return (
    <View>
      <Image source={data.image} style={{ height: 150, width: 300, borderRadius: 10 }}></Image>
    </View>
  )
}

export default BannerSlider