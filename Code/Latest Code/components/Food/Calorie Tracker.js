// written by: Mya Odrick
  // tested by: Mya Odrick
  // debugged by: Mya Odrick
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './components/Homescreen';
import FoodInput from './components/FoodInput';
import ExercisePage from './components/ExercisePage';
import GoalsPage from './components/Goals'

const Stack = createStackNavigator();

function CalorieTracker(){
  return(
    <NavigationContainer independent = {true}>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Food Search" component={FoodInput} />
        <Stack.Screen name="Exercise" component={ExercisePage} />
        <Stack.Screen name = "Home" component={Homescreen} />
        <Stack.Screen name = "Goals" component={GoalsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default CalorieTracker;
