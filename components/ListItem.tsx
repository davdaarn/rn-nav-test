import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { windowWidth } from '../utils/dimensions'

export default function ListItem({ data, onPress }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, marginBottom: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        <Image
          source={data.poster}
          style={{
            width: 55,
            height: 55,
            borderRadius: 10,
            marginRight: 8
          }}></Image>
        <View style={{ width: windowWidth - 220 }}>
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Inter-Medium',
              fontSize: 14
            }}
          >{data.subtitle}</Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Inter-Medium',
              fontSize: 14,
              textTransform: 'uppercase'
            }}>{data.title}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPress} style={{
        width: 100,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#4eb48d',
      }}>
        <Text style={{ color: '#ffffff', textAlign: 'center' }}>{data.price || 'Free'}</Text>
      </TouchableOpacity>
    </View>
  )
}