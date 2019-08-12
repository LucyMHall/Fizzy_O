import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';

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

        <TouchableOpacity
           style={styles.button}
           onPress={() => this.props.navigation.navigate("UserMain")}>
           <Text> Log In </Text>
        </TouchableOpacity>

    </ImageBackground>
  );
}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBoxes: {
    borderWidth: 1,
    borderColor: 'white',
   paddingLeft:20,
   margin: 5,
   backgroundColor: 'rgba(255,255,255,0.4)',
   width:300,
   height: 40,
   fontSize:15,
   borderRadius: 25,
   justifyContent: 'center',
   alignItems: 'center',
 },

 button: {
   alignItems: 'center',
   backgroundColor: 'white',
   width:150,
   borderRadius: 25,
   padding: 10,
   marginTop: 10
}
});
