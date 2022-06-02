import { View, Text } from 'react-native'
import React from 'react'

export default function GameDetailScreen({ navigation, route }) {
  return (
    <View>
      <Text>GameDetailScreen</Text>
      <Text>{route.params?.title}</Text>
    </View>
  )
}