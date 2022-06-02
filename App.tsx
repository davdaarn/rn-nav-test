import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
import 'react-native-gesture-handler';

const App = () => {
  let [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Magicons': require('./assets/fonts/Magicons.ttf'),
  })
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AppStack></AppStack>
      {/* <AuthStack></AuthStack> */}
    </NavigationContainer>
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

export default App;