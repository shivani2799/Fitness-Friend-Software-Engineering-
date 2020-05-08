  // written by: Mya Odrick
  // tested by: Mya Odrick
  // debugged by: Mya Odrick
import * as React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import LoginMain from './components/LoginMain';import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './components/reducers'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <LoginMain />
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    //padding: 25,
  },
});
