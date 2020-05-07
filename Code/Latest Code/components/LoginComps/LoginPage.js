import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image,
  Alert, WebViewPlatform,} from 'react-native';
import Constants from 'expo-constants';
import Firebase from '../../config'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../actions/user'

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  handleLogin = () => {
    this.props.login()
    if (this.props.user != null) {
      this.props.navigation.navigate('Home')
    }
  };

  state = {
      email: '',
      password: '',
  };

  componentDidMount = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.getUser(user.uid)
        if (this.props.user != null) {
          this.props.navigation.navigate('Home')
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.title}>
        <Text style = {styles.paragraph}>
          FITNESS FRIEND
        </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
          value={this.props.user.email}
          keyboardType = 'email-address'
          onChangeText={email => this.props.updateEmail(email)}
          placeholder='email'
          />   
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            value={this.props.user.password}
            onChangeText={password => this.props.updatePassword(password)}
            placeholder={'password'}
            secureTextEntry={true}
          />
        </View>

        <Button
          style={[styles.buttonContainer, styles.button]}
          //onPress={()=>this.onLoginListener()}
          onPress={()=>this.handleLogin() }
          title="Login"
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
    title:{
    paddingTop: Constants.statusBarHeight,
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
  }
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, login }, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)