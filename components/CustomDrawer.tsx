import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Cart from "../assets/SVG/Black/cart-icon.svg";

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#8200d6' }}
      >
        <ImageBackground
          source={require('../assets/images/menu-bg.jpeg')}
          style={{ padding: 20 }}
        >
          <Image
            source={require('../assets/images/FoxHead_1000_bg1.png')}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              marginBottom: 10
            }} />
          <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Inter-Medium' }}>Mr. David</Text>
          <Text style={{ color: '#fff', fontFamily: 'Inter-Medium' }}>742 Coins</Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props}></DrawerItemList>
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Cart />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Inter-Medium',
                marginLeft: 10
              }}
            >Share the love</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Cart />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Inter-Medium',
                marginLeft: 10
              }}
            >Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  )
}