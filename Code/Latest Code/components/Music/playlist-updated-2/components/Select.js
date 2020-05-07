import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {

  render() {
    return (
 <View style={styles.container}>
        <Text style={styles.paragraph}>
          Pick an Exercise
        </Text>
        
         <TouchableOpacity
        onPress={() => this.props.navigation.push('Details', {Exercise: 1})}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Walking</Text>
       </TouchableOpacity>
      <Text style={styles.paragraph}>
          
        </Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Details', {Exercise: 2})}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: '#000',fontWeight: 'bold',
    textAlign: 'center' }}>Jogging</Text>
      </TouchableOpacity>
      <Text style={styles.paragraph}>
      
      </Text>
      
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Details', {Exercise: 3})}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Running</Text>
       </TouchableOpacity>
        <Text style={styles.paragraph}>
      
      </Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Details', {Exercise: 4})}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Biking/Elliptical</Text>
       </TouchableOpacity>
        <Text style={styles.paragraph}>
      
      </Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Details', {Exercise: 5})}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Muscle Endurance</Text>
       </TouchableOpacity>
        <Text style={styles.paragraph}>
      
      </Text> 
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Details', {Exercise: 6})}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Strength Training</Text>
       </TouchableOpacity>
        <Text style={styles.paragraph}>
      
      </Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Details', {Exercise: 7})}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Yoga/Stretching</Text>
       </TouchableOpacity>
      </View>
      
 );
 }
 } 
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecfof01',
    padding: 8,
  },
  paragraph: { 
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

