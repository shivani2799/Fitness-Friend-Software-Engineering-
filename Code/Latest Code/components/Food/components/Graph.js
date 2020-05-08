// written by: Mya Odrick
  // tested by: Mya Odrick
  // debugged by: Mya Odrick
import React from 'react';
import { View, TouchableOpacity, Button } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';
import firebase from '../../../config';

export default class BarChartVerticalWithLabels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  updateCounter = () => {
    var userId = firebase.auth().currentUser.uid;
    var count = [];
    firebase
      .database()
      .ref('users/' + userId + '/Workouts')
      .on('value', function(data) {
        count = data.val()
      });
    this.setState({
      data: count,
    });
  };

  render() {
    //const data = [ 10, 15, 25, 15, 20, 0, 0 ]

    const CUT_OFF = 20;
    const Labels = ({ x, y, bandwidth, data }) =>
      data.map((value, index) => (
        <Text
        key = {index}
        > 
        <Text
          key={index}
          x={x(index) + bandwidth / 2}
          y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
          fontSize={14}
          fill={value >= CUT_OFF ? 'white' : 'black'}
          alignmentBaseline={'middle'}
          textAnchor={'middle'}>
          {value} 
        </Text>
        heloo </Text>

      ));
    if (this.state.data == null) {
      return (
        <View>
          <Button
            onPress={() => this.updateCounter()}
            style={{ backgroundColor: 'green' }}
            title="Update"
          />
        </View>
      );
    }

    return (
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          height: 200,
          paddingVertical: 16,
        }}>
        <BarChart
          style={{ flex: 1 }}
          data={this.state.data}
          svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
          contentInset={{ top: 10, bottom: 10 }}
          spacing={0.2}
          gridMin={0}>
          <Grid direction={Grid.Direction.HORIZONTAL} />
          <Labels />
        </BarChart>
        <XAxis
          style={{ marginHorizontal: -10 }}
          data={this.state.data}
          formatLabel={(value, index) => index}
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 10, fill: 'black' }}
        />
        <View>
          <Button
            onPress={() => this.updateCounter()}
            style={{ backgroundColor: 'green' }}
            title="Update"
          />
        </View>
      </View>
    );
  }
}
