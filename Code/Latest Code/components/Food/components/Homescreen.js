// written by: Maria Rios
  // tested by: Maria Rios
  // debugged by: Maria Rios & Mya Odrick
import * as React from 'react';
import {Component} from 'react'
import {

  MaterialCommunityIcons,

} from '@expo/vector-icons';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
  SafeAreaView
} from 'react-native';
import firebase from '../../../config';
import Graph from './Graph'

export default class App extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#fff',
  };
  constructor() {
    super();
    this.state = {
      cals: 0
    };
  }
  updateCals = () => {
    var userId = firebase.auth().currentUser.uid;
    var calsN;
    var calsO;
    firebase
      .database()
      .ref('users/' + userId)
      .on('value', function(data) {
        calsN = data.val().calsIn;
        calsO = data.val().calsOut;
      });
    this.setState({
      cals: calsN - calsO
    });
  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.numText}> {this.state.cals}/1800 </Text>
        <TouchableOpacity onPress={() => this.updateCals()}>
          <Text>Refresh</Text>
        </TouchableOpacity>
        <Text style={styles.subText}> Daily Calories</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Food Search')}
            style={styles.smallContainer}>
            <MaterialCommunityIcons name="apple" size={25} />
              <Text style={styles.item}>Calories</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Exercise')}
            style={styles.smallContainer}>
           <MaterialCommunityIcons name="run" size={25} />
            <Text style={styles.item}>Exercise</Text>
          </TouchableOpacity>
                    <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Goals')}
            style={styles.smallContainer}>
           <MaterialCommunityIcons name="update" size={25} />
            <Text style={styles.item}>Goals</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <Graph />
        </View>

        {/*back button*/}
        <Button
          style={[styles.buttonContainer, styles.button]}
          onPress={() => this.props.navigation.goBack()} // go back to the home screen
          title="Back"
          color="#00b5ec"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  smallContainer: {
    paddingRight: 20,
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomContainer: {
   // marginTop: 50,
    padding: 15,
    alignItems: 'left',
    backgroundColor: 'E2E2E2',
  },
  bottomText: {
    fontSize: 18,
    margin: 5,
  },
  numText: {
    paddingBottom: 30,
    fontSize: 20,
    textAlign: 'center',
  },
  subText: {
    paddingBottom: 60,
    fontSize: 20,
    textAlign: 'center',
  },
  rowContainer: {
    textAlign: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 10,
  },
  item: {
    textAlign: 'center',
    margin: 20,
    fontSize: 18,
    //paddingLeft: 15,
    //paddingRight: 15,
  },
});
