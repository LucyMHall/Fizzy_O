import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { iOSUIKit } from 'react-native-typography'


export default class HomeScreen extends Component {
  static navigationOptions = { header: null }

  render() {
    return(
      <ImageBackground source={require('./assets/pictures/G3.jpg')} style={styles.container}>
      <Image
      style={{width: 150, height: 150}}

      source= {require('./assets/pictures/heart_white.png')}
      />
        <Text style={styles.textStyling}>Sign up</Text>

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

        <TouchableOpacity
           style={styles.button}
           onPress={() => this.props.navigation.navigate("UserMain")}>
           <Text> Sign Up </Text>
        </TouchableOpacity>


        <Text style = {iOSUIKit.title4EmphasizedWhite, styles.textStyling} >Already have an account?</Text>

        <TouchableOpacity
           style={styles.button}
           onPress={() => this.props.navigation.navigate("Login")}>
           <Text> Log In </Text>
        </TouchableOpacity>

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
 },


  textStyling: {
    padding:20
  }

});
