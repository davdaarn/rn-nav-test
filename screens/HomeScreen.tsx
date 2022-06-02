import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import Cart from "../assets/SVG/Black/cart-icon.svg";
import Carousel from 'react-native-snap-carousel';
import { freeGames, paidGames, sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import { windowHeight, windowWidth } from '../utils/dimensions';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);
  const _renderItem = ({ item, index }) => {
    return <BannerSlider data={item} />
  }

  const onSelectSwitch = (value) => {
    setGamesTab(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20
        }}>
          <Text style={{ fontSize: 16, fontFamily: 'Inter-Bold' }}>Hello Mr. David</Text>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <ImageBackground
              source={require('../assets/images/FoxHead_1000_bg1.png')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#6da9df',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8
        }}>
          <Cart width={16} height={16} color={'#6da9df'} style={{ marginRight: 8 }} />
          <TextInput placeholder='Search' ></TextInput>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Text>Upcoming Homes</Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: '#6da9df' }}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }} >
          <Carousel
            // ref={(c) => {this._carousel = c;}}
            data={sliderData}
            renderItem={_renderItem}
            sliderWidth={windowWidth - 40}
            itemWidth={300}
            loop={true}
            enableMomentum={false}
          />
        </View>

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1='Free to play'
            option2='Paid games'
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab === 1 && freeGames.map(item => {
          return <ListItem
            key={item.id}
            data={item}
            onPress={() => navigation.navigate('GameDetails', { title: item.title, id: item.id })} />
        })}
        {gamesTab === 2 && paidGames.map(item => {
          return <ListItem
            key={item.id}
            data={item}
            onPress={() => navigation.navigate('GameDetails', { title: item.title, id: item.id })} />
        })}
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    // paddingLeft: 20,
    // paddingRight: 20
  },
})