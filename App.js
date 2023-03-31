import { NavigationContainer, DefaultTheme  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from './screens/MainScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createStackNavigator();

const customNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
  // padding 16으로 지정
  cardStyle: {
    backgroundColor: 'transparent',
    padding: 32,
  },
};

const styles = StyleSheet.create({
  linearGradient: {
    position:"absolute",
    width:"100%",
    height:"100%",
  },
}); 

const App = () => {
  return (
  <NavigationContainer theme={customNavigationTheme}> 
      <LinearGradient
        // Background Linear Gradient
        colors={['#000B18','#00172D', '#00264D']}
        start={{ x: 0.5, y: 0.2 }}
        style={styles.linearGradient}
      /> 
    <Stack.Navigator initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false 
      }}>
      
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator> 
</NavigationContainer>
  );
};

export default App;   