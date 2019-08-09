import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {AsyncStorage} from 'react-native';

export default class UserMainScreen extends Component {

  _retrieveData = async (search_word) => {
    try {
      const value = await AsyncStorage.getItem(search_word);
      if (value !== null) {
        // We have data!!
        console.log(value)
      } else {
        console.log("That value does not exist");
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    return(
      <View>
        <Text>Let's get Fizzy-cal</Text>
        <Button
          onPress = {() => this._retrieveData('username')}
          title="retrieve username from Async"
        />

      </View>
    )
  }
}
