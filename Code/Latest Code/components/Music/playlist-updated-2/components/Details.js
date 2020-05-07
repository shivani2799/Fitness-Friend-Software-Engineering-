import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Constants from 'expo-constants';

class Queue{
  constructor(){
    this.data= [];
  }
  enqueue(element){
    this.data.push(element);
  }
  front(){
    if(this.isEmpty())
    return 0;
    return this.data[0];
  }
  isEmpty(){
    return this.data.length==0
  }
  length(){
    return this.data.length;
  }
  printQueue(){
    var str= "";
    for (var i=0; i< this.data.length; i++)
      str+= this.data[i]+" ";
    return str;
  }
  dequeue(){
    if(this.isEmpty())
    return 0;
    return this.data.shift();
  }
}

var Exercises = new Queue();

var Times = new Queue();

var Genres = new Queue();

export default class App extends React.Component {
done(){
var E=String(Exercises.printQueue());
var T=String(Times.printQueue());
var G=String(Genres.printQueue());
var N=Exercises.length();
this.props.navigation.navigate('Curation', {E, T, G, N})
}
TimeQueue(n){
  console.log(Times.enqueue(n));
  alert (Times.printQueue()) 
} 
Genrequeue(n){
  console.log(Genres.enqueue(n));
  alert(Genres.printQueue())
}

constructor(props){
super(props);
var n=this.props.navigation.state.params.Exercise;
console.log(Exercises.enqueue(n));
alert (Exercises.printQueue())
}

  render() {
    return (
 <View style={styles.container}>
        <Text style={{ fontSize: 20, color: '#000', padding: 10, fontWeight: 'bold',
    textAlign: 'center', }}>
        </Text>
        <Text style={{ fontSize: 20, color: '#000', padding: 10, fontWeight: 'bold',
    textAlign: 'center', }}>
          How many minutes?
        </Text>
        <TouchableOpacity
        onPress={() => this.TimeQueue(5)}
        style={{ backgroundColor: 'white' }}> 
        <Text style={{ fontSize: 12, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>5</Text>
       </TouchableOpacity>
       <TouchableOpacity
        onPress={() => this.TimeQueue(10)}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>10</Text>
       </TouchableOpacity>
       <TouchableOpacity
        onPress={() => this.TimeQueue(15)}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>15</Text>
       </TouchableOpacity>
       <TouchableOpacity
        onPress={()=> this.TimeQueue(20)}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>20</Text> 
       </TouchableOpacity>
       <TouchableOpacity
       onPress={()=> this.TimeQueue(30)}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>30</Text>
       </TouchableOpacity>
        <Text style={styles.paragraph}>
      
        </Text>
        <Text style={{ fontSize: 20, color: '#000', padding: 10, fontWeight: 'bold',
    textAlign: 'center', }}>
          What genre should the playlist include for this exercise? (Choose one)
        </Text>

        <TouchableOpacity
        onPress={() => this.Genrequeue(1)}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Rap/Hip-Hop</Text>
       </TouchableOpacity>
        
        <TouchableOpacity
        onPress={() => this.Genrequeue(2)}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Pop</Text>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={() => this.Genrequeue(3)}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Classical</Text>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={() => this.Genrequeue(4)}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Country</Text>
       </TouchableOpacity>

        <Text style={styles.paragraph}>
      
        </Text>
         <TouchableOpacity
        onPress={() => this.done()}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Done with workout!</Text>
       </TouchableOpacity>
      
      
      <TouchableOpacity
        onPress={() => this.props.navigation.goBack()}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>Add another exercise</Text>
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
    margin: 14,
    fontSize: 18,
    textAlign: 'center',
  },

});




