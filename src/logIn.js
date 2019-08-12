import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = { header: null }

  render() {
    return(
      <ImageBackground source={require('./assets/pictures/G3.jpg')} style={styles.container}>
      <Text style={styles.textBox}>Log In</Text>
      <TextInput
          placeholder = 'Email'
        />
        <TextInput
          placeholder = 'Password'
        />
        <Button
          title="Log in"
          onPress={() => this.props.navigation.navigate("UserMain")}
        />
    </ImageBackground>
  );
}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBox: {
  fontFamily: 'Helvetica'
  }
});
