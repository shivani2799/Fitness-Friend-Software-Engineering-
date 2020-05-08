// written by: Jenna Krause
  // tested by: Jenna Krause
  // debugged by: Mya Odrick
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image,
  Alert, WebViewPlatform,} from 'react-native';
import Constants from 'expo-constants';
import Firebase from '../../config'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup } from '../actions/user'

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'SignUp',
  };

  state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
  };

  handleSignUp = () => {
        this.props.signup()
        this.props.navigation.navigate('Home')
    }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.title}>
        <Text style = {styles.paragraph}>FITNESS FRIEND</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
          value={this.state.firstName}
          keyboardType = 'first-name'
          onChangeText={(firstName) => this.setState({ firstName })}
          placeholder='First Name'
          />   
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
          value={this.state.lastName}
          keyboardType = 'last-name'
          onChangeText={(lastName) => this.setState({ lastName })}
          placeholder='Last Name'
          />   
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
          value={this.props.user.email}
          keyboardType = 'email-address'
          onChangeText={email => this.props.updateEmail(email)}
          placeholder='Email'
          />   
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            value={this.props.user.password}
            onChangeText={password => this.props.updatePassword(password)}
            placeholder={'Password'}
            secureTextEntry={true}
          />
        </View>

        <Button
          style={[styles.buttonContainer, styles.button]}
          onPress={()=>this.handleSignUp()}
          title="Sign Up"
          color="#00b5ec"
        />
        
        <Text style={styles.body}>
        </Text>

        <Button
          style={[styles.buttonContainer, styles.button]}
          color="#00b5ec"
          title='Back'
          onPress={() => this.props.navigation.goBack()}
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
  inputContainer: {
    borderBottomColor: 'black',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: 'black',
    flex:1,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
  },
  button: {
    backgroundColor: "#00b5ec",
  },  title:{
    paddingTop: Constants.statusBarHeight,
  },
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
