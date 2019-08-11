import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {AsyncStorage} from 'react-native';

export default class UserMainScreen extends Component {
  
  constructor(props){
    super(props);
    this.state = {}
  }

  _retrieveUsernameData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        // We have data!!
        this.setState({ username: value })
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

        {this.state.username &&
          <Text>Hello {this.state.username}</Text>
        }
        <Button
          onPress = {() => this._retrieveUsernameData()}
          title="retrieve username from Async"
        />
      </View>
    )
  }
}
