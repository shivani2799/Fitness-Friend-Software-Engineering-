// written by: Mya Odrick
  // tested by: Mya Odrick
  // debugged by: Mya Odrick
import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Platform,
  Alert,
  YellowBox,
  ScrollView,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

import { Card, DataTable } from 'react-native-paper';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import InputSpinner from 'react-native-input-spinner';
import { connect } from 'react-redux';
import firebase from '../../../config';
import FavoriteTable from './FavoriteTable'

export default class FoodInput extends React.Component {
  static navigationOptions = {
    title: 'Food Search',
    headerTintColor: '#1E90FF',
    headerStyle: {
      backgroundColor: '#FFFFFF',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      //sets the original states
      searchInput: '',
      i: 1,
      cals: 0,
      table: {
        name: [],
        cals: [],
        keys: [],
      },
      favList:{
        name: '',
        cals: 0
      },
      searchResult: null,
      freq: null,
      error: '',
      isLoading: false,
    };
  }

  searchFood = async () => {
    //function to fetch Data
    this.setState({
      isLoading: true,
    });
    var url = 'https://api.edamam.com/api/food-database/parser?ingr=';
    var ing = this.state.searchInput;
    var api = '&app_id=16847fd7&app_key=2958984ba626fc9c860d0c89d5178b49';
    url = url.concat(ing);
    url = url.concat(api);

    var requestOptions = {
      method: 'GET',
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        //console.log(result)
        var res = result;
        //console.log(res.hints[0].food)
        this.setState({
          //changes state
          isLoading: false,
          searchResult: {
            //information from API
            name: res.hints[0].food.label,
            oCal: res.hints[0].food.nutrients.ENERC_KCAL,
            cals: res.hints[0].food.nutrients.ENERC_KCAL,
            image: res.hints[0].food.image,
          },
        });
      })
      .catch(error => {
        console.log('error', error)
        this.goBack();
        });
  };

  searchFoodUPC = async () => {
    //function to fetch Data
    this.setState({
      isLoading: true,
    });
    var url = 'https://api.edamam.com/api/food-database/parser?upc=';
    var ing = this.state.searchInput;
    var api = '&app_id=16847fd7&app_key=2958984ba626fc9c860d0c89d5178b49';
    url = url.concat(ing);
    url = url.concat(api);

    var requestOptions = {
      method: 'GET',
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        var res = result;
        console.log(res.hints[0].food);
        this.setState({
          //changes state
          isLoading: false,
          searchResult: {
            //information from API
            name: res.hints[0].food.label,
            oCal: res.hints[0].food.nutrients.ENERC_KCAL,
            cals: res.hints[0].food.nutrients.ENERC_KCAL,
            image: res.hints[0].food.image,
          },
        });
      })
      .catch(error => {
        console.log('error', error)
        this.goBack();
        });
  };

  recMeal = async () =>{

  }
  goBack = async () => {
    this.setState({
      isLoading: false,
      searchResult: null,
    });
  };
  addToTracker = () => {
    var userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref('users/' + userId)
      .update({
        calsIn: this.state.cals,
      });
  };
  addToList = () => {
    var userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref('users/' + userId + '/favList/')
      .push({
        name: this.state.searchResult.name,
        cals: this.state.searchResult.cals,
      });
  };

  rmFromList(key) {
    var userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref('users/' + userId + '/favList/' + key)
      .remove();
  }
  updateCals = cals => {
    var userId = firebase.auth().currentUser.uid;
    var prev;
    firebase
      .database()
      .ref('users/' + userId)
      .once('value', function(data) {
        prev = data.val().calsIn;
      });
    this.setState({ cals: this.state.searchResult.cals * this.state.i + prev });
    this.addToTracker();
  };
  updateList = () => {
    var list = this.state.favList;
    var name = this.state.searchResult.name;
    var cals = this.state.searchResult.cals;
    this.setState({
      favList: {
        name: name,
        cals: cals,
      },
    });
    this.addToList();
  };
  updateTable = table => {
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
          console.log(
            item.key +
              ': ' +
              'name: ' +
              item.val().name +
              ' cals: ' +
              item.val().cals
          );
          name.push(item.val().name);
          cals.push(item.val().cals);
          keys.push(item.key);
        });
      });
    //console.log(name);
    //console.log(cals)
    this.setState({
      table: {
        name: name,
        cals: cals,
      },
    });
  };

  renderTableData() {
    //FIX
    return this.state.table.map((table, index) => {
      const { name, cals } = table;
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{cals}</td>
        </tr>
      );
    });
  }

  onChangeText(input) {
    this.setState(state => {
      return { searchInput: input };
    });
  }

  render() {
    let {
      searchInput,
      searchResult,
      isLoading,
      error,
      i,
      freq,
      table,
    } = this.state;

    if (isLoading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator />
          <TouchableOpacity onPress={this.goBack}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (error) {
      return (
        <View>
          <Text>{error}</Text>
        </View>
      );
    }
    if (searchResult) {
      return (
        <View style={styles.container1}>
          <Card
            elevation={10}
            style={{
              width: Dimensions.get('screen').width,
              height: 115,
              margin: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 30, textTransform: 'capitalize' }}>
                  {searchResult.name}{' '}
                </Text>

                <Text>{searchResult.cals} calories</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  alignContent: 'center',
                }}>
                <Image
                  source={{ uri: searchResult.image }}
                  style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
                />
              </View>
            </View>
          </Card>
          <Card
            elevation={10}
            style={{
              width: Dimensions.get('screen').width,
              height: 80,
              margin: 8,
              alignItems: 'center',
            }}>
            <View style={{ alignItems: 'center' }}>
              <Text
                style={{ justifyItems: 'center', adjustsFontSizeToFit: true }}>
              </Text>
              <InputSpinner
                value={i}
                min={0}
                colorMax={'#f04048'}
                colorMin={'#40c5f4'}
              />
            </View>
          </Card>
          <View style={{alignContent: 'space-between' }}>
            <Table>
                      <Card
            elevation={10}
            style={{
              width: Dimensions.get('screen').width,
              margin: 8,
              alignItems: 'center',
            }}>
              <TouchableOpacity onPress={this.goBack} style={styles.button}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              </Card>
                        <Card
            elevation={10}
            style={{
              width: Dimensions.get('screen').width,
              margin: 8,
              alignItems: 'center',
            }}>
              <TouchableOpacity
                onPress={() => this.updateCals()}
                style={styles.button}>
                <Text> Add</Text>
              </TouchableOpacity>
              </Card>
                        <Card
            elevation={10}
            style={{
              width: Dimensions.get('screen').width,
              margin: 8,
              alignItems: 'center',
            }}>
              <TouchableOpacity
                onPress={() => this.addToList()}
                style={styles.button}>
                <Text>Favorite</Text>
              </TouchableOpacity></Card>
            </Table>
          </View>
          <Image
            source={require('../assets/logo.png')}
            style={{ width: 200, height: 40 }}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 30,
            width: 250,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 100 / 2,
            fontSize: 10,
            textAlign: 'center',
          }}
          placeholder={'Search by Food Name'}
          onChangeText={searchInput => {
            this.setState({ searchInput: searchInput });
          }}
          onSubmitEditing={this.searchFood}
          returnKeyType={'search'}
        />
        <TextInput
          style={{
            height: 30,
            width: 250,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            borderRadius: 100 / 2,
            fontSize: 10,
            textAlign: 'center',
          }}
          placeholder={'Search by UPC Barcode Number'}
          onChangeText={searchInput => {
            this.setState({ searchInput: searchInput });
          }}
          onSubmitEditing={this.searchFoodUPC}
          returnKeyType={'search'}
        />
        <TouchableOpacity onPress ={() => this.recMeal()}>

        </TouchableOpacity>

          <Text>Favorite Meals</Text>

        <ScrollView>
          <FavoriteTable />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'white',
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
    //backgroundColor: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('screen').width,
    padding: 10,
  },
});
