// written by: Mya Odrick
  // tested by: Mya Odrick
  // debugged by: Mya Odrick
import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';

import Playlist from '../playlist-updated-2/App'
import Oauth from '../oauth-login/App'
import Spotify from '../spotify-app/App'
import Home from './HomeScreen'
import Back from '../../Home'



   

const HomeStack = createStackNavigator();

function Main(){
  return(
    <NavigationContainer independent = {true}>
    <HomeStack.Navigator initialRouteName = "Home" screenOptions={{headerShown:true}}>
    <HomeStack.Screen name= "Home" component = {Home} />
        <HomeStack.Screen name="Playlist Curator" component={Playlist} />
        <HomeStack.Screen name="Spotify App" component={Spotify} />
        <HomeStack.Screen name = "Oauth-Login" component={Oauth} />
        <HomeStack.Screen name= "Back" component={Back} />


    </HomeStack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    //padding: 25,
  },
  paragraph: {
    //margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 80,
    color: 'black',
    //shadowOpacity: 20,
    //fontFamily: 'Iowan Old Style'

  },
});



export default Main;
