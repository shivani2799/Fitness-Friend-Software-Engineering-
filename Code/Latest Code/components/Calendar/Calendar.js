import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert, Picker, WebView, Switch, ScrollView, Linking, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import firebase from './../../config.js';

export default class App extends Component {
  constructor() {
    super();
    
    this.state = { //store initial values of variables
      freeTime: 'off',
      timeNeeded: "1000",  
      startTime: "1000",
      endTime: "1000",
      notifyTime: "1000",
      show: true,
      expoPushToken: '',
      notification: {},
    }
  }
  
  setFreeTime = (freeTime) => {
    this.setState({ freeTime : 'off' }); //initially set free time to off
    this.setState({show : false}); //hide components
  }

  //function to retrieve push notification permissions
  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      
      if (existingStatus !== 'granted') { //push notifications enabled
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      
      if (finalStatus !== 'granted') { //push notifications not enabled
        alert('Failed to get push token for push notification!');
        return;
      }
      
      let token = await Notifications.getExpoPushTokenAsync(); //get the users push notification
      this.setState({ expoPushToken: token }); //store the users push notification
      
      var userId = firebase.auth().currentUser.uid; //retrieve the users id
      firebase.database().ref('users/' + userId).update({ //store the users push token
        expoPushToken: this.state.expoPushToken
      }, 
      function(error) {
        return;
      });
    } 
    
    else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') { //set push notification settings
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
    };

  componentDidMount(){
    this.registerForPushNotificationsAsync(); //check for push notifications permissions
    this.setFreeTime; //set free time and hide components
  }

  //function to update the free time variable to chosen dropdown value
  updateFreeTime = (freeTime) => {
    this.setState({ freeTime: freeTime })
    if (this.state.freeTime == 'off') {
      this.setState({ show: false }); // hide free time preferences
    }
    if (this.state.freeTime == 'on') {
      this.setState({ show: true }); // show other free time preferences
    } 
  }
  //function to update the workout time variable to chosen dropdown value
  updateTimeNeeded = (timeNeeded) => {
    this.setState({ timeNeeded: timeNeeded })
  }
  //function to update the start time variable to chosen dropdown value
  updateStartTime = (startTime) => {
    this.setState({ startTime: startTime })
  }
  //function to update the end time variable to chosen dropdown value
  updateEndTime = (endTime) => {
    this.setState({ endTime: endTime })
  }
  //function to update the workout time variable to chosen dropdown value
  updateNotifyTime = (notifyTime) => {
    this.setState({ notifyTime: notifyTime })
  }

  //worker to open url
  _handlePress = () => {
   Linking.openURL(this.props.href); //link to google url
   this.props.onPress && this.props.onPress(); //open google url
  };

  onSaveListener = () => {
    var userId = firebase.auth().currentUser.uid; //retrieve the users id
    firebase.database().ref('users/' + userId).update({ //store the new preferences
      startTime: parseInt(this.state.startTime), //parse answer as int
      endTime: parseInt(this.state.endTime), //parse answer as int
      timeNeeded: parseInt(this.state.timeNeeded), //parse answer as int
      notifyTime: parseInt(this.state.notifyTime) //parse answer as int
    }, 
    function(error) {
      if (!error) {
        Alert.alert('Preferences Saved!'); //preferences were saved
      }
    });
  }
  
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.MainContainer}>
        {/*header*/}
        <Text style={styles.title}>
        Calendar
        </Text>

        {/*free time toggle*/}
        <View style={styles.inputContainer}>
          <Text style={styles.body}>
          Free Time Notifications:
          </Text>
          <Picker 
            selectedValue = {this.state.freeTime} //display the selected value
            onValueChange = {this.updateFreeTime} //update stored value
            style={{width:100}}>
            <Picker.Item label="On" value="on" />
            <Picker.Item label="Off" value="off" />
          </Picker>
        </View>
        
        {/*free time start time picker (hide if notifications off)*/}
        {!this.state.show ? (
        <View style={styles.inputContainer}>
          <Text style={styles.body}>
          Free Time Start Time:
          </Text>
          <Picker
            selectedValue={this.state.startTime} //display the selected value
            onValueChange={this.updateStartTime} //update stored value
            style={{width: 120}} >
            <Picker.Item label="Select" value="1000" />
            <Picker.Item label="12 AM" value="0" />
            <Picker.Item label="1 AM" value="1" />
            <Picker.Item label="2 AM" value="2" />
            <Picker.Item label="3 AM" value="3" />
            <Picker.Item label="4 AM" value="4" />
            <Picker.Item label="5 AM" value="5" />
            <Picker.Item label="6 AM" value="6" />
            <Picker.Item label="7 AM" value="7" />
            <Picker.Item label="8 AM" value="8" />
            <Picker.Item label="9 AM" value="9" />
            <Picker.Item label="10 AM" value="10" />
            <Picker.Item label="11 AM" value="111" />
            <Picker.Item label="12 PM" value="12" />
            <Picker.Item label="1 PM" value="13" />
            <Picker.Item label="2 PM" value="14" />
            <Picker.Item label="3 PM" value="15" />
            <Picker.Item label="4 PM" value="16" />
            <Picker.Item label="5 PM" value="17" />
            <Picker.Item label="6 PM" value="18" />
            <Picker.Item label="7 PM" value="19" />
            <Picker.Item label="8 PM" value="20" />
            <Picker.Item label="9 PM" value="21" />
            <Picker.Item label="10 PM" value="22" />
            <Picker.Item label="11 PM" value="23" />
          </Picker>
        </View>
        ) : null}

        {/*free time end time picker (hide if notifications off)*/}
        {!this.state.show ? (
        <View style={styles.inputContainer}>
          <Text style={styles.body}>
          Free Time End Time:
          </Text>
          <Picker
            selectedValue={this.state.endTime} //display the selected value
            onValueChange={this.updateEndTime} //update stored value
            style={{width: 120}} >
            <Picker.Item label="Select" value="1000" />
            <Picker.Item label="12 AM" value="0" />
            <Picker.Item label="1 AM" value="1" />
            <Picker.Item label="2 AM" value="2" />
            <Picker.Item label="3 AM" value="3" />
            <Picker.Item label="4 AM" value="4" />
            <Picker.Item label="5 AM" value="5" />
            <Picker.Item label="6 AM" value="6" />
            <Picker.Item label="7 AM" value="7" />
            <Picker.Item label="8 AM" value="8" />
            <Picker.Item label="9 AM" value="9" />
            <Picker.Item label="10 AM" value="10" />
            <Picker.Item label="11 AM" value="111" />
            <Picker.Item label="12 PM" value="12" />
            <Picker.Item label="1 PM" value="13" />
            <Picker.Item label="2 PM" value="14" />
            <Picker.Item label="3 PM" value="15" />
            <Picker.Item label="4 PM" value="16" />
            <Picker.Item label="5 PM" value="17" />
            <Picker.Item label="6 PM" value="18" />
            <Picker.Item label="7 PM" value="19" />
            <Picker.Item label="8 PM" value="20" />
            <Picker.Item label="9 PM" value="21" />
            <Picker.Item label="10 PM" value="22" />
            <Picker.Item label="11 PM" value="23" />
          </Picker>
        </View>
        ) : null}
        
        {/*time needed picker (hide if notifications off)*/}
        {!this.state.show ? (
        <View style={styles.inputContainer}>
          <Text style={styles.body}>
          Workout Time Needed:
          </Text>
          <Picker
            selectedValue={this.state.timeNeeded} //display the selected value
            onValueChange={this.updateTimeNeeded} //update stored value
            style={{width: 170}} >
            <Picker.Item label="Select" value="1000" />
            <Picker.Item label="30 min" value="30" />
            <Picker.Item label="45 min" value="45" />
            <Picker.Item label="1 hour" value="60" />
            <Picker.Item label="1 hour 15 min" value="75" />
            <Picker.Item label="1 hour 30 min" value="90" />
            <Picker.Item label="1 hour 45 min" value="105" />
            <Picker.Item label="2 hours" value="120" />
            <Picker.Item label="2 hours 15 min" value="130" />
            <Picker.Item label="2 hours 30 min" value="150" />
            <Picker.Item label="2 hours 45 min" value="185" />
            <Picker.Item label="3 hours" value="180" />
          </Picker>
        </View>
        ) : null}

        {/*notify interval picker (hide if notifications off)*/}
        {!this.state.show ? (
        <View style={styles.inputContainer}>
          <Text style={styles.body}>
          Notifcation Time:
          </Text>
          <Picker
            selectedValue={this.state.notifyTime} //display the selected value
            onValueChange={this.updateNotifyTime} //update stored value
            style={{width: 170}} >
            <Picker.Item label="Select" value="1000" />
            <Picker.Item label="15 min" value="15" />
            <Picker.Item label="30 min" value="30" />
            <Picker.Item label="45 min" value="45" />
            <Picker.Item label="1 hour" value="60" />
            <Picker.Item label="1 hour 15 min" value="75" />
            <Picker.Item label="1 hour 30 min" value="90" />
          </Picker>
        </View>
        ) : null}

        {/*space between buttons*/}
        <Text style={styles.body}>
        </Text>

        {/*save button*/}
        <Button style={[styles.buttonContainer, styles.button]}
            onPress={()=>this.onSaveListener()} // save the user preferences
            title="Save"
            color="#00b5ec"
        />
        
        {/*space between buttons*/}
        <Text style={styles.body}>
        </Text>

        {/*google login button (hide if notifications off)*/}
        {!this.state.show ? (
        <Button title='Google Authentication'
          onPress={()=>this._handlePress} 
          color="#00b5ec"
        />
        ) : null}

        {/*space between buttons*/}
        <Text style={styles.body}>
        </Text>

        {/*timer button (hide if notifications off)*/}
        {!this.state.show ? (
        <Button title={'Go to Notification Timer'} onPress={() =>           this.props.navigation.navigate('Timer')} 
        color="#00b5ec"
        />
        ) : null}

        {/*space between buttons*/}
        <Text style={styles.body}>
        </Text>

        {/*back button*/}
        <Button style={[styles.buttonContainer, styles.button]}
          onPress={()=>this.props.navigation.goBack()} // go back to the home screen
          title="Back"
          color="#00b5ec"
        />
      </View>
      </ScrollView>      
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
  },
  title: {
    margin: 5,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    textAlign: 'left',
  },
  inputContainer: {
    borderBottomColor: 'black',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    width:330,
    height:60,
    flexDirection: 'row',
    alignItems:'center',
  },
});