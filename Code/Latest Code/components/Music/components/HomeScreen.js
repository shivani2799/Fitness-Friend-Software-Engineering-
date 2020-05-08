// written by: Mya Odrick
  // tested by: Mya Odrick
  // debugged by: Mya Odrick
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import {FlatGrid} from 'react-native-super-grid';




class Home extends React.Component {
    static navigationOptions = {
    title: 'Home',
  };
  updateTestInB(){
    this.props.updateTest(true)
  }
  constructor(props){
    super(props);
    this.state = {
      page: true
    };
   // this.navigate = this.navigate.bind(this)
  }
  /*navigate(name){
    this.page = name
  }*/


  render() {
    const items = [
      { name: 'Playlist Curator', code: 'black', icon:'playlist-music'}, { name: 'Spotify App', code: 'black', icon: 'spotify'   },
      { name: 'Oauth-Login', code: 'black', icon: 'login' }, { name: 'Back', code: 'black', icon: 'home'}
    ];
      let {page} = this.state;

    return (
      <View style={{backgroundColor: 'white'}}>
              <Text style = {styles.paragraph}>Music Curator</Text>

        <FlatGrid
        itemDimension={140}
        items={items}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <View style={[styles.container, { backgroundColor: item.code }]}>
          <TouchableOpacity 
          style={styles.icons}
          onPress={()=>this.props.navigation.navigate(item.name)}
          >
          <MaterialCommunityIcons 
          name = {item.icon}  size = {100} color = {'white'}/>
            <Text style={styles.itemName}>{item.name}</Text>
              </TouchableOpacity>
          </View>
        )}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {//buttons
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,

    //height: 250,
    //padding: 5,
  },
    paragraph: {
    //margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 0,
    color: 'black',
    //shadowOpacity: 20,
    //fontFamily: 'Iowan Old Style'

  },
    itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  icons:{
    height: 150,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
export default Home;
