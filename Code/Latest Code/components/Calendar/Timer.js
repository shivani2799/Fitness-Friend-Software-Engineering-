import React from 'react';
import {Switch, StyleSheet, View, Button, Text, ScrollView, Platform, Vibration } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import firebase from './../../config';

class CountEvenNumbers extends React.Component{
	shouldComponentUpdate(nextProps){
		return !(nextProps.count % 2)
	}

	render(){
		return(
			<Text style={styles.count}>{this.props.count}</Text>
		)
	}
}

class Counter extends React.Component{
	constructor(){
		super()
		this.state = {
			count: (15*60),
      expoPushToken: '',
      notification: {},
    }
	}
  
  updateNotifyTime = notifyTime => { 
    var userId = firebase.auth().currentUser.uid; //retrieve the users id
    var prev;
    firebase.database().ref('users/' + userId).once('value', function(data) {
      prev = data.val().notifyTime; //store the notify time
    });
    this.setState({ count: prev }); //set the notify time
  };

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

  _handleNotification = notification => {
    Vibration.vibrate();
    this.setState({ notification: notification });
  };

  //handle push notifications in app instead of through expos web tool: https://expo.io/dashboard/notifications
  sendPushNotification = async () => {
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'Fitness Friend',
      body: 'Time to Workout!',
      _displayInForeground: true,
    };
    
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };

	componentDidMount(){
    this.registerForPushNotificationsAsync(); //check for push notifications permissions
    this._notificationSubscription = Notifications.addListener(this._handleNotification);//handle notifications that are received or selected while the app is open.

    this.updateNotifyTime(); //get the new notify time

		this.interval = setInterval(this.inc, 1000); //countdown
	}

	componentWillUnmount(){
		clearInterval(this.interval)
	}

	inc = () => {
		this.setState(prevState => ({
			count: prevState.count -1, //decrement count
		}))
    if (this.state.count == 0){
      this.sendPushNotification(); //send the push notification
      clearInterval(this.interval)
    }
	}

 render(){
 	return (
 		<View style = {styles.appContainer}>
			<Text style={styles.count}> {this.state.count}</Text>
		</View>
 		)
 }
}

export default class App extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
      <ScrollView style={{ backgroundColor: 'white' }}>
			<View style = {styles.MainContainer}>
        {/*space*/}
        <Text style = {styles.body}> </Text>
        <Text style = {styles.body}> </Text>
        <Text style = {styles.body}> </Text>

        <Text style = {styles.body}>
          Minutes Until Next Free Time Notification: 
        </Text>
        <View style = {styles.appContainer}>
          <Counter/>
        </View>
        <Button style={[styles.buttonContainer, styles.button]}
          onPress={()=>this.props.navigation.goBack()} // go back to the home screen
          title="Back"
          color="#00b5ec"
        />
        {/*space*/}
        <Text style={styles.body}>
        </Text>

        {/*space*/}
        <Text style={styles.body}>
        </Text>
        
			</View>
      </ScrollView>
		)
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
  appContainer: {
		flex: 1,
		alignItems : 'center',
		justifyContent : 'center',
	},
	count: {
		fontSize: 48,
    margin: 20,
    justifyContent : 'center',
	},
  body: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
    justifyContent : 'center',
  }
})