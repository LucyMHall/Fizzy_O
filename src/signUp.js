import React, {Component} from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native';
import {AsyncStorage} from 'react-native';

export default class HomeScreen extends Component {

  constructor(props){
      super(props);

      this.state = {
        username: "",
        email: "",
        password: ""
      }
    }

    _storeData = async (
        username, username_value,
        email, email_value,
        password, password_value
        ) => {

      try {
        await AsyncStorage.setItem(username, username_value);
      } catch (error) {
        // Error saving data
      }
      try {
        await AsyncStorage.setItem(email, email_value);
      } catch (error) {
        // Error saving data
      }
      try {
        await AsyncStorage.setItem(password, password_value);
      } catch (error) {
        // Error saving data
      }
    };


  render() {
    return(
    <View style={styles.container}>
      <Text>Welcome to Fizzy_O!</Text>
      <Text>Sign up</Text>
      <TextInput
        placeholder = "username"
        onChangeText={(text) => this.setState({username: text})}
      />
      <TextInput
        placeholder = "email"
        onChangeText={(text) => this.setState({email: text})}
      />
      <TextInput
        placeholder = "password"
        secureTextEntry = {true}
        onChangeText={(text) => this.setState({password: text})}
      />
      <Button
        onPress = {() => this._storeData(
          'username',this.state.username,
          'email', this.state.email,
          'password', this.state.password)
        }
        title="Save info"
      />
      <Button
        onPress = {() => 
          this.props.navigation.navigate("UserMain")
        }
        title="Sign up"
      />
      <Text>Already have an account?</Text>
    </View>
  );
}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
