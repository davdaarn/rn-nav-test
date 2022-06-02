import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnboardingScreen(all) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 30, color: '#20315f', fontFamily: "Inter-Regular" }}>Hello</Text>
      </View>
      <TouchableOpacity
        onPress={() => all.navigation.navigate('Login')}
        style={{
          backgroundColor: '#ad40af',
          padding: 20, width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Text style={{ color: '#fff', fontSize: 20, fontFamily: "Inter-Regular" }}>Let's Begin</Text>
        <Ionicons name="chevron-forward" size={30} style={{ color: '#fff' }}></Ionicons>
      </TouchableOpacity>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `#fff`
  },
});