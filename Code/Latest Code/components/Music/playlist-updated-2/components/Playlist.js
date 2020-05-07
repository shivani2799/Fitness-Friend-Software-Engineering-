import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';


class Playlist extends React.Component {
 
   static navigationOptions = {
    title: 'Home',
 headerStyle: {
      backgroundColor: '#03A9F4',
    },
 headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
 
  }; 
 

  render() {
    return (
    <View style={styles.container}>
        <Text style={styles.paragraph}>
          Playlist Curator
        </Text>
        <Image
        source={{uri:'https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519586-083_Music-512.png',}}
        />
         <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Select')}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Make a new playlist</Text>
       </TouchableOpacity>
      <Text style={styles.paragraph}>
          
        </Text>
      <TouchableOpacity
        onPress={() => alert('Spotify Api connection')}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: '#000',fontWeight: 'bold',
    textAlign: 'center' }}>Saved Playlists</Text>
      </TouchableOpacity>
    
    </View>
  );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    margin: 4
  }
});

export default Playlist;