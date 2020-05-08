  // written by: Mya Odrick
  // tested by: Mya Odrick
  // debugged by: Mya Odrick
import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';

import SelectPage from './LoginComps/SelectPage'
import LoginPage from './LoginComps/LoginPage'
import SignUpPage from './LoginComps/SignUpPage'
import HomePage from './Home'
import MusicPage from './Music/Music'
import CalendarPage from './Calendar/Calendar'
import TimerPage from './Calendar/Timer'
import FoodPage from './Food/Calorie Tracker'
import SettingsPage from './Settings'

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

function Home(){
  return(
    <NavigationContainer independent = {true}>
    <HomeStack.Navigator initialRouteName = "Home" screenOptions={{headerShown:false}}>
    <HomeStack.Screen name= "Home" component = {HomePage} />
      <HomeStack.Screen name="Calendar" component={CalendarPage} />
      <HomeStack.Screen name="Timer" component={TimerPage} />
      <HomeStack.Screen name="Calorie Tracker" component={FoodPage} />
      <HomeStack.Screen name = "Music" component={MusicPage} />
      <HomeStack.Screen name = "Settings" component={SettingsPage} />
      <HomeStack.Screen name="Select" component={SelectPage} />
      <HomeStack.Screen name = "Login" component={LoginPage} />
      <HomeStack.Screen name = "SignUp" componet={SignUpPage} />
    </HomeStack.Navigator>
    </NavigationContainer>
  );
}

function Main() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Select"   screenOptions={{headerShown: false}}>
          <Stack.Screen name="Select" component={SelectPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name = "SignUp" component={SignUpPage} />
          <Stack.Screen name = "Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    //padding: 25,
  }
});

export default Main;
