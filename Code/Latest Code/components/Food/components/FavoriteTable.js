import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions, Button } from 'react-native';
import firebase from '../../../config'



export default class App extends React.Component {
  constructor(props) {
    super(props);
  this.state ={
    data: null
  }
  }
  Item = ({ item })=> {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity 
      onPress = {() => this.addToTracker(item[1]) }
      style={{height:20,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"green"}}>Add</Text>
      </TouchableOpacity>
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold"}}>{item[0]}</Text>
        <Text>{item[1]}</Text>
      </View>
      <TouchableOpacity 
      onPress ={() => this.rmFromList(item[2])}
      style={{height:20,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"red"}}>Delete</Text>
      </TouchableOpacity>

    </View>
  );
}

login = ()=>{
    var email = 'test@test.com';
    var password = 'password';

    const response = firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log('logged in');
  }

updateTable= (table) =>{
    //FIX
    var name = [];
    var cals = [];
    var keys = [];
    var userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref('users/' + userId + '/favList/')
      .once('value', function(data) {
        data.forEach(function(item) {

          name.push([item.val().name,item.val().cals,item.key]);
          cals.push(item.val().cals);
          keys.push(item.key);

        });
      });

    //console.log(name);
    //console.log(cals)
    this.setState({
      data: {
        name: name,
        cals: cals,
        keys: keys
      },
    });
  }
    addToTracker = (cals) => {
          var userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref('users/' + userId + '/calsIn')
      .transaction(function(num) {
        return num + cals;
      });
  };
  rmFromList(key) {
    var userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref('users/' + userId + '/favList/' + key)
      .remove();
      this.setState({
        data: null
      })
      //this.updateTable()
  }
  

  render(){
    if(this.state.data == null){
        return(
          <View style = {styles.container}>
          <Button onPress = {() => this.updateTable(this.state.data)}
          title= "Update Table "/>
          </View>
        )
    }
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data.name}
          renderItem={({ item }) => <this.Item item={item}/>}
          keyExtractor={item => this.state.data.keys}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    //marginTop:60
  },
  listItem:{
    margin:5,
    padding:10,
    backgroundColor:"#FFF",
    width: Dimensions.get('screen').width,
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius: 8
  }
});