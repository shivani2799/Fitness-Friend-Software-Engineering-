  // written by: Mya Odrick
  // tested by: Mya Odrick
  // debugged by: Mya Odrick
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { FlatGrid } from 'react-native-super-grid';

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
      page: true,
      height: 100,
    };
  }

  render() {
    const items = [
      { name: 'Calendar', code: 'black', icon:'calendar-multiselect'}, { name: 'Calorie Tracker', code: 'black', icon: 'chart-line'   },
      { name: 'Music', code: 'black', icon: 'music' }, { name: 'Settings', code: 'black', icon: 'account-settings' },
    ];
      let {page} = this.state;
      let screenHeight = Dimensions.get('window').height;

    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Text style = {styles.paragraph}>FITNESS FRIEND</Text>

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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {//buttons
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
    paragraph: {
    //margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 80,
    color: 'black',
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
