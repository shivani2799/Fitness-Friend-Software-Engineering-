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

function printn(n){
  return n;
}
//given three queues, also the length n, after converting string to queues
//2n length array for bpm ranges (2n-1 and 2n represent the ranges for exercise n)
//exercisearray -> i
//timearray -> j
//genrearray -> k

//declare bpm as a queue
//declare genreq as an array of strings of length n

/*function bpm(k, i){

switch (k){
case 1: //rap
switch (i){
case 1:
bpmarray.enqueue(bpmlower);
bpmarray.enqueue(bpmupper);
case 2:
bpmarray.enqueue(bpmlower);
bpmarray.enqueue(bpmupper);
case 3:
bpmarray.enqueue(bpmlower);
bpmarray.enqueue(bpmupper);
case 4:
bpmarray.enqueue(bpmlower);
bpmarray.enqueue(bpmupper);
case 5:
bpmarray.enqueue(bpmlower);
bpmarray.enqueue(bpmupper);
case 6:
bpmarray.enqueue(bpmlower);
bpmarray.enqueue(bpmupper);
case 7:
bpmarray.enqueue(bpmlower);
bpmarray.enqueue(bpmupper);
}
break;
//and so on for all genres
}
bpmarray.printQueue();
}

}
function genredecode(w){
switch(w){
case 1:
genreq[w]="Rap";
case 2:
genreq[w]="Pop";
case 3:
genreq[w]="Classical";
case 4:
genreq[w]="Country";
}
}
*/

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
/* Test:
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
timearray=(+chararr2[h]);
genrearray=(+chararr3[h]);

//at this point, all data has been converted back to int arrays
//next step: create bpm queue and array of genre strings. not fully tested. See fncs above.

/*for(int m=0; m<n; m++){
bpm(genrearray[m], exercisearray[m]);
genredecode(genrearray[m]);
}
*/
}

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




