import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return(
    <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Fizzy_O!</Text>
      <Text>Sign up</Text>
         <TextInput 
                style={styles.inputs} 
          placeholder='Username'
        />
         <TextInput 
                style={styles.inputs} 
          placeholder='Email'
        />
         <TextInput 
                style={styles.inputs} 
          placeholder='Password'
        />
         <TextInput 
                style={styles.inputs} 
          placeholder='Confirm password'
        />
      <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate("Login")}
        />

      <Text>Already have an account?</Text>
        <Button
          title="Log In"
          onPress={() => this.props.navigation.navigate("Login")}
        />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%'
  },

  heading: {
    fontSize: 16,
    flex: 1,
    fontFamily: "Marker Felt"
  },
  inputs: {
    flex: 1,
    width: '80%',
    padding: 10,
    fontFamily: "Marker Felt",
    borderRadius: 20,
    borderWidth: 0.5
  },
  multiInput: {
    flex: 2,
    width: '90%',
    paddingTop: 20
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  }
  });

