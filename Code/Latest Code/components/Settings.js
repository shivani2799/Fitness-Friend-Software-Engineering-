import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight,
  Image, Alert, WebView } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux'
import firebase from './../config';

class SettingsView extends React.Component {
  //initialize the holder variables;
  state = {
    firstName: '',
    lastName: '',  
    email: '',
    password: '',
  }
  
  //Log out call
  handleSignout = () => {
    firebase.auth().signOut()
    this.props.navigation.navigate('Select')
  }

  onLogoutListener = () => {
    Alert.alert('Logout pressed');
  }

  //Save button call
  onSaveListener = () => {
    var user = firebase.auth().currentUser; 
    var userId = user.uid; //retrieve the users id

    user.updateEmail(this.state.email).then(function() { //update the account email
      // Update successful.
    }).catch(function(error) {
      // An error occurred.
    });
    
    user.updatePassword(this.state.password).then(function() { //update the account password
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });

    firebase.database().ref('users/' + userId).update({ //store the new user info
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    }, 
    function(error) {
      if (!error) {
        Alert.alert('Preferences Saved!'); //preferences were saved
      }
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
        Settings
        </Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.body}>
            First Name:
          </Text>
          <TextInput style={styles.inputs}
            placeholder = {this.props.user.firstName}
            onChangeText={(firstName) => this.setState({ firstName })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.body}>
            Last Name:
          </Text>
          <TextInput style={styles.inputs}
            placeholder = {this.props.user.lastName}
            onChangeText={(lastName) => this.setState({ lastName })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.body}>
            Email:
          </Text>
          <TextInput style={styles.inputs}
            onChangeText={(email) => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.body}>
            Password: 
          </Text>
          <TextInput style={styles.inputs}
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry={true}
          />
        </View>

        <Button style={[styles.buttoncContainer, styles.button]}
          onPress={()=>this.onSaveListener()}
          title="Save"
          color="#00b5ec"
        />

        <Text style={styles.body}>
        </Text>

        <Button style={[styles.buttonContainer, styles.button]}
          onPress={()=>this.handleSignout()}
          title="Log Out"
          color="#00b5ec"
        />
        <Text style={styles.body}>
        </Text>

        <Button style={[styles.buttonContainer, styles.button]}
          onPress={() => this.props.navigation.goBack()}
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: 'black',
    flex:1,
  },
  inputContainer: {
    borderBottomColor: 'black',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin:20,
    width:250,
  },
  title: {
    margin: 5,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    margin: 5,
    fontSize: 16,
    textAlign: 'left',
  },
  button: {
    backgroundColor: "#00b5ec",
  }
});

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SettingsView)