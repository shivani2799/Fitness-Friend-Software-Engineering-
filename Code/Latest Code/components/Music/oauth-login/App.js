// Created by - Devvrat Patel
// Tested by - Devvrat Patel
// Debugged by - Shivani Sunil
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthSession } from 'expo';

const GH_URL = 'https://accounts.spotify.com/authorize' +
  '?response_type=code'
const CLIENT_ID = 'f7bc9b02a8a34f989d0fd354211ad91d'
const CLIENT_SECRET = '6c52392c19af41baafef48c441ec1f33'

export default class GitHubAuth extends Component {
  state = {
    result: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login to Spotify" onPress={this._handlePressAsync} />
        {this.state.result ? (
          <Text>{JSON.stringify(this.state.result)}</Text>
        ) : null}
        </View>
    );
  }

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
      authUrl:
        `${GH_URL}` +
        `&client_id=${CLIENT_ID}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });
    this.setState({ result });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
