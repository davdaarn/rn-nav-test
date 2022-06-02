import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Cart from "../assets/SVG/Black/cart-icon.svg";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameDetailScreen from '../screens/GameDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // drawerActiveBackgroundColor: '#6bb0ff',
        // drawerActiveTintColor: '#fff',
        // drawerInactiveTintColor: '#333',
        // drawerLabelStyle: {
        //   marginLeft: -20,
        //   fontFamily: 'Inter-Medium',
        //   fontSize: 15,
        // }
      }}
    >
      <Tab.Screen name="Home2" component={HomeStack} options={{
        // tabBarStyle: { display: 'none' },
        tabBarIcon: ({ color, size }) => <Cart />
      }} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  )
}

