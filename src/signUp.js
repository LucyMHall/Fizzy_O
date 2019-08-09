import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return(
    <View style={styles.container}>
      <Text>Welcome to Fizzy_O!</Text>
      <Text>Sign up</Text>
      <TextInput
          placeholder = 'Username'
        />
        <TextInput
          placeholder = 'Email'
        />
        <TextInput
          placeholder = 'Password'
        />
        <TextInput
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
