
import React from "react";

import HomeScreen from "../screens/HomeScreen";
import { createDrawerNavigator, DrawerScreenProps } from "@react-navigation/drawer";
// import Screen from "@react-navigation/core/src/Screen"
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MomentsScreen from "../screens/MomentsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CustomDrawer from "../components/CustomDrawer";
import Cart from "../assets/SVG/Black/cart-icon.svg";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

export default function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#6bb0ff',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: 'Inter-Medium',
          fontSize: 15,
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: () => <Cart />
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: () => <Cart />
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          drawerIcon: () => <Cart />
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={MomentsScreen}
        options={{
          drawerIcon: () => <Cart />
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: () => <Cart />
        }}
      />
    </Drawer.Navigator>
  )
}

