import { NavigationContainer } from "@react-navigation/native";
import React from "react";
// import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View, Text } from 'react-native'
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  )
}