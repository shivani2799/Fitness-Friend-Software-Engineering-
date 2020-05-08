import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Constants from 'expo-constants';
class Queue {
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
//given three queues/arrays of length n
//exercisearray -> i
//timearray -> j
//genrearray -> k

//declare bpm as a queue to be used in function "bpm"
//2n length array for bpm ranges (indices 2n-2 and 2n-1 represent the ranges for exercise n)
var bpmarray=new Queue;

//declare genreq as an array of strings of length n to be used in "genredecode"
var genreq=new Queue;

export default class App extends React.Component {

constructor(props){
super(props);
var exercisestring=this.props.navigation.state.params.E;
var timestring=this.props.navigation.state.params.T;
var genrestring=this.props.navigation.state.params.G;
var n=this.props.navigation.state.params.N;

var chararr = new Array(n);
var chararr2 = new Array(n);
var chararr3 = new Array(n);
chararr=exercisestring.split(" ");
chararr2=timestring.split(" ");
chararr3=genrestring.split(" ");
/* Functional Test:
for(var b=0; b<n; b++){
  console.log(chararr[b]);
  alert(chararr[b])
}
*/
var exercisearray=[];
var timearray =[];
var genrearray =[];

for(var h=0; h<n; h++)
{
exercisearray.push(+chararr[h]); //automatic type casting
timearray.push(+chararr2[h]);
genrearray.push(+chararr3[h]);
}
//at this point, all data has been converted back to int arrays
//next step: create bpm queue and array of genre strings.
//They're implemented below.

for(var m=0; m<n; m++){
//bpm queue creation
switch(exercisearray[m]){
case 1:
bpmarray.enqueue(100);
bpmarray.enqueue(140);
break;
case 2:
bpmarray.enqueue(120);
bpmarray.enqueue(140);
break;
case 3:
bpmarray.enqueue(130);
bpmarray.enqueue(150);
break;
case 4:
bpmarray.enqueue(140);
bpmarray.enqueue(180);
break;
case 5:
bpmarray.enqueue(80);
bpmarray.enqueue(115);
break;
case 6:
bpmarray.enqueue(130);
bpmarray.enqueue(150);
break;
case 7:
bpmarray.enqueue(60);
bpmarray.enqueue(90);
break;
}
//genre array creation
switch(genrearray[m]){
case 1:
genreq[m]="Rap";
break;
case 2:
genreq[m]="Pop";
break;
case 3:
genreq[m]="Classical";
break;
case 4:
genreq[m]="Country";

}}

//after the for loop executes, global queues bpmarray, genreq, and local var timearray
//...contain all necessary information for API information.

}
  render() {
    return (
 <View style={styles.container}>
        <Text style={{ fontSize: 12, color: '#000',fontWeight: 'bold',
    textAlign: 'center', }}>
        {this.props.navigation.state.params.E}
        --
        {this.props.navigation.state.params.T}
        --
        {this.props.navigation.state.params.G}
        </Text>
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

});
