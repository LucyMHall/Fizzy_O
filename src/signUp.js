import React, {Component} from 'react';
import { StyleSheet, Text, Button, TextInput, View, ImageBackground } from 'react-native';
import { iOSUIKit } from 'react-native-typography'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native';
import {AsyncStorage} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = { header: null }

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
    <ImageBackground source={require('./assets/pictures/G3.jpg')} style={styles.container}>
      <Text style={iOSUIKit.title4EmphasizedWhite}>Welcome to Fizzy-O!</Text>
      <Text style={iOSUIKit.title3EmphasizedWhite}>Sign up</Text>
      <TextInput
        style={styles.textBoxes}
        placeholder = "username"
        onChangeText={(text) => this.setState({username: text})}
      />
      <TextInput
        style={styles.textBoxes}
        placeholder = "email"
        onChangeText={(text) => this.setState({email: text})}
      />
      <TextInput
        style={styles.textBoxes}
        placeholder = "password"
        secureTextEntry = {true}
        onChangeText={(text) => this.setState({password: text})}
      />
      <TextInput
        style={styles.textBoxes}
        placeholder = 'Confirm password'
        secureTextEntry = {true}
        // onChangeText={(text) => this.state.password == text
      />
      <Button
        title="Sign up"
        onPress = {() => {
          this.props.navigation.navigate("UserMain");
          this._storeData(
            'username',this.state.username,
            'email', this.state.email,
            'password', this.state.password)
          }
        }

      />
      <Text>Already have an account?</Text>
      <Button
          title="Log In"
          onPress={() => this.props.navigation.navigate("Login")}
        />
    </ImageBackground>
  );
}}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
   },

   textBoxes: {
    paddingLeft:20,
    margin: 5,
    backgroundColor:'white',
    width:300,
    height: 40,
    fontSize:15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
   }
});
