// written by: Jenna Krause
  // tested by: Jenna Krause
  // debugged by: Jenna Krause
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Constants from 'expo-constants';


class SelectPage extends React.Component {
   static navigationOptions = {
    title: 'Select'
  }; 
 
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.title}>
        <Text style = {styles.paragraph}>FITNESS FRIEND</Text>
        </View>
        <Button
          style={[styles.buttonContainer, styles.button]}
          color="#00b5ec"
          title='Login'
          onPress={() => this.props.navigation.navigate('Login')}
        />

        <Text style={styles.body}>
        </Text>

        <Button
          style={[styles.buttonContainer, styles.button]}
          color="#00b5ec"
          title='Sign Up'
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }, 
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
  },
  paragraph: {
    //margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 80,
    color: 'black',
  },
  button: {
    backgroundColor: "#00b5ec",
  }, 
  title:{
    paddingTop: Constants.statusBarHeight,
  },
});

export default SelectPage;
