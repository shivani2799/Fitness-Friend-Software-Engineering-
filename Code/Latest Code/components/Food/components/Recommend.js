import React, { Component } from 'react';
import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from '@expo/vector-icons';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';
import firebase from '../../../config';


export default class Recommend extends React.Component {
  static navigationOptions = {
    title: 'Recommend',
    headerTintColor: '#fff',
  };

  state = {
    backgroundColorVg: 'ecf0f1',
    backgroundColorVt: 'ecf0f1',
    backgroundColorNA: 'ecf0f1',
    backgroundColorBr: 'ecf0f1',
    backgroundColorLu: 'ecf0f1',
    backgroundColorDi: 'ecf0f1',
    diet: '',
    meal: '',
    foods: null,
  };

  foodRestr(diet) {
  //recommendations based on preferences
  if (diet == 'Vegan') {
      this.setState({
        diet: 'Vegan',
        backgroundColorVg: 'gray',
        backgroundColorVt: 'ecf0f1',
        backgroundColorNA: 'ecf0f1',
      });
  } else if (diet == 'Vegetarian') {
    this.setState({
        diet: 'Vegetarian',
        backgroundColorVt: 'gray',
        backgroundColorVg: 'ecf0f1',
        backgroundColorNA: 'ecf0f1',
      });
  } else if (diet == 'NA') {
    this.setState({
        diet: 'NA',
        backgroundColorVt: 'gray',
        backgroundColorVg: 'ecf0f1',
        backgroundColorNA: 'ecf0f1',
      });
  } else {
      this.setState({
        diet: '',
        backgroundColorVg: 'ecf0f1',
        backgroundColorVt: 'ecf0f1',
        backgroundColorNA: 'ecf0f1',
      });
    }
  }

  mealType(meal) {
      if (meal == 'Breakfast') {
      this.setState({
        meal: 'Breakfast',
        backgroundColorBr: 'gray',
        backgroundColorLu: 'ecf0f1',
        backgroundColorDi: 'ecf0f1',
      });
  } else if (meal == 'Lunch') {
    this.setState({
        meal: 'Lunch',
        backgroundColorLu: 'gray',
        backgroundColorBr: 'ecf0f1',
        backgroundColorDi: 'ecf0f1',
      });
  } else if (meal == 'Dinner') {
    this.setState({
        meal: 'Dinner',
        backgroundColorDi: 'gray',
        backgroundColorLu: 'ecf0f1',
        backgroundColorBr: 'ecf0f1',
      });
  } else {
      this.setState({
        meal: '',
        backgroundColorVg: 'ecf0f1',
        backgroundColorVt: 'ecf0f1',
        backgroundColorNA: 'ecf0f1',
      });
    }
  }

  pickFoods() {
    if (this.state.diet == 'NA') {
      if (this.state.meal == 'Breakfast') {
        this.setState({
        foods: 'boiled eggs, greek yogurt, berries',
        });
      } else if (this.state.meal == 'Lunch') {
        this.setState({
        foods: 'grilled chicken salad, sweet potatoes, salmon',
        });
      } else if (this.state.meal == 'Dinner') {
        this.setState({
        foods: 'quinoa, black eyed peas w/ brown rice, grilled chicken w/ veggies',
        });
      }
    } else if (this.state.diet == 'Vegan') {
      if (this.state.meal == 'Breakfast') {
        this.setState({
        foods: 'avocado toast, green tea, bananas',
        });
      }else if (this.state.meal == 'Lunch') {
        this.setState({
        foods: 'fruit salad, kale quinoa bowl, tomato basil soup',
        });
      } else if (this.state.meal == 'Dinner') {
        this.setState({
        foods: 'butternut squash soup, rice noodles, tofu',
        });
      }
    } else if (this.state.diet == 'Vegetarian'){
        if (this.state.meal == 'Breakfast') {
        this.setState({
        foods: 'fruit, peanut butter w/ toast, chia seeds',
        });
      } else if (this.state.meal == 'Lunch') {
        this.setState({
        foods: 'chikpea salad, caprese sandwich, zucchini noodle stir fry',
        });
      } else if (this.state.meal == 'Dinner'){
        this.setState({
        foods: 'lentil tortilla soup, hummus avocado toast, vegetarian lettuce wraps',
        });
      }
    }

  }

  render() {

if (this.state.foods) {
  return (
    <View style = {styles.smallContainer}>
        <TouchableOpacity
            onPress={() => {Alert.alert(this.state.foods), this.goBack}}>
            <Text style={styles.items}> {this.state.foods}</Text>
        </TouchableOpacity>
    </View>
  );
  }

  return (
    <View style = {styles.container}>
    <Text style={styles.title}>Preference</Text>
     <Text style={styles.subText}> What are your dietary restrictions?</Text>
        <TouchableOpacity
          onPress={() => this.foodRestr('Vegan')}
          style={{ backgroundColor: this.state.backgroundColorVg }}>
          <Text style={styles.items}>Vegan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.foodRestr('Vegetarian')}
          style={{ backgroundColor: this.state.backgroundColorVt }}>
          <Text style={styles.items}>Vegetarian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.foodRestr('NA')}
          style={{ backgroundColor: this.state.backgroundColorNA }}>
          <Text style={styles.items}>N/A</Text>
        </TouchableOpacity>
     <Text style={styles.subText}> What type of meal do you prefer?</Text>
        <TouchableOpacity
          onPress={() => this.mealType('Breakfast')}
          style={{ backgroundColor: this.state.backgroundColorBr }}>
          <Text style={styles.items}>Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.mealType('Lunch')}
          style={{ backgroundColor: this.state.backgroundColorLu }}>
          <Text style={styles.items}>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.mealType('Dinner')}
          style={{ backgroundColor: this.state.backgroundColorDi }}>
          <Text style={styles.items}>Dinner</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => this.pickFoods()}>
            <Text style={styles.bottomContainer}>Submit</Text>
        </TouchableOpacity>
        </View>
  )

  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallContainer: {
    paddingRight: 20,
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    marginTop: 50,
    padding: 15,
    alignItems: 'left',
    backgroundColor: '#F0F8FF',
  },
  subText: {
    paddingBottom: 60,
    fontSize: 20,
    textAlign: 'center',
  },
  items: {
    margin: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});
