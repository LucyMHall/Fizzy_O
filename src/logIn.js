import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = { header: null }

  render() {
    return(
      <ImageBackground source={require('./assets/pictures/G3.jpg')} style={styles.container}>
      <Text>Log In</Text>
      <TextInput style={styles.textBoxes}
          placeholder = 'Email'
        />
        <TextInput style={styles.textBoxes}
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
