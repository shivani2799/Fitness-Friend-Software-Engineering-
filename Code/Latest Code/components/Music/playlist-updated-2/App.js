import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Playlist from './components/Playlist';
import Select from './components/Select';
import Details from './components/Details';
import Curation from './components/Curation';

const Stack = createStackNavigator();



export default class App extends Component {
  render() {
    return( 
      <NavigationContainer independent = {true}>
    <Stack.Navigator initialRouteName = "Playlist" screenOptions ={{headerShown: true}}>
    <Stack.Screen name = "Playlist" component = {Playlist} />
    <Stack.Screen name = "Select" component = {Select} />
    <Stack.Screen name = "Details" component = {Details} />
    <Stack.Screen name = "Curation" component = {Curation} />
    </Stack.Navigator>
    </NavigationContainer>
    
    
    
    
    )

    
  }
}

