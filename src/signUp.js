import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground } from 'react-native';
import { iOSUIKit } from 'react-native-typography'


export default class HomeScreen extends Component {
  static navigationOptions = { header: null }

  render() {
    return(
      <ImageBackground source={require('./assets/pictures/G3.jpg')} style={styles.container}>
        <Text style={iOSUIKit.title4EmphasizedWhite}>Welcome</Text>
        <Text style={iOSUIKit.title3EmphasizedWhite}>Sign up</Text>
        <TextInput style={styles.textBoxes}
            placeholder = 'Username'
          />
          <TextInput style={styles.textBoxes}
            placeholder = 'Email'
          />
          <TextInput style={styles.textBoxes}
            placeholder = 'Password'
          />
          <TextInput style={styles.textBoxes}
            placeholder = 'Confirm password'
          />
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate("UserMain")}
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
