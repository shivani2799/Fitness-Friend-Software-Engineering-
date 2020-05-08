// written by: Hedaya Walter
  // tested by: Hedaya Walter
  // debugged by: Hedaya Walter & Mya Odrick
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
import firebase from '../../../config'
//import firebase 

export default class App extends React.Component {
  state = {
    backgroundColorG: 'ecf0f1',
    backgroundColorL: 'ecf0f1',
    backgroundColorM: 'ecf0f1',
    backgroundColorF: 'ecf0f1',
    weight: 0,
    gender: '',
    goal: '', //name of goal
    goalWeight: 0, //calculated user ideal weight
    pounds: 0, //amount user inputs for goal
    message: '',
  };

  selectType(userGender){
    if(userGender == 'Male'){
      this.setState({
        gender: 'Male',
        backgroundColorM: 'gray', 
        backgroundColorF: 'white',
        });
    } else if(userGender == 'Female'){
      this.setState({  
        gender: 'Female',
        backgroundColorM: 'white',
        backgroundColorF: 'gray',
        });
    } 
  }

  selectGoal(userGoal){
    if(userGoal == 'Gain Muscle'){
      this.setState({
        goal: 'Gain Muscle',
        backgroundColorG: 'gray', 
        backgroundColorL: 'white',
        });
    } else if(userGoal == 'Lose Weight'){
      this.setState({  
        goal: 'Lose Weight',
        backgroundColorG: 'white',
        backgroundColorL: 'gray',
        });
    } 
  }

  calculateGoalWeight(){ 
    if(this.state.goal == "Gain Muscle"){
      this.setState({goalWeight: parseInt(this.state.weight) + parseInt(this.state.pounds)});
    } else if (this.state.goal == "Lose Weight"){
      this.setState({goalWeight: parseInt(this.state.weight) - parseInt(this.state.pounds)});
    }
    this.addToTracker();
  }

  checkGoal(){
    if(this.state.weight == this.state.goalWeight){
      this.setState({message: 'You have reached your goal!!'}); 
    }
  }

  addToTracker = () => {
    var userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref('users/' + userId)
      .update({
        weight: this.state.weight,
        gender: this.state.gender,
        goal: this.state.goal,
        goalWeight: this.state.goalWeight,
        pounds: this.state.pounds,
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Info/Goals!</Text>
        <Text style={{ fontSize: 20, color: 'green', textAlign: 'center' }}>{this.state.message}</Text>
        <TouchableOpacity
          onPress={() => this.selectType('Male')}
          style={{ backgroundColor: this.state.backgroundColorM }}>
          <Text style={styles.items}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.selectType('Female')}
          style={{ backgroundColor: this.state.backgroundColorF }}>
          <Text style={styles.items}>Female</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Weight (in lbs):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          numeric
          value
          keyboardType={'numeric'}
          onChangeText={weight => {
            this.setState({ weight: weight });
          }}
        />
        <TouchableOpacity
          onPress={() => this.updateInfo()}
          style={{ backgroundColor: 'black' }}>
          <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>
            UPDATE
          </Text>
        </TouchableOpacity>
        <Text style={styles.header}>Choose a goal:</Text>
        <TouchableOpacity
          onPress={() => this.selectGoal('Gain Muscle')}
          style={{ backgroundColor: this.state.backgroundColorG }}>
          <Text style={styles.items}>Gain Muscle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.selectGoal('Lose Weight')}
          style={{ backgroundColor: this.state.backgroundColorL }}>
          <Text style={styles.items}>Lose Weight</Text>
        </TouchableOpacity>
        <Text style={styles.header}>lbs to lose/gain (1-5):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          numeric
          value
          keyboardType={'numeric'}
          onChangeText={pounds => {
            this.setState({ pounds: pounds });
          }}
        />
        <TouchableOpacity
          onPress={() => this.calculateGoalWeight()}
          style={{ backgroundColor: 'black' }}>
          <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>
            ENTER
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    margin: 3,
    fontSize: 18,
    fontWeight: 'bold',
  },
  items: {
    margin: 5,
    fontSize: 18,
    textAlign: 'center',
  },
});
