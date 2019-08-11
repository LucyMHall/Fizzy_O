import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return(
    <View style={styles.container}>
      <Text>Log In</Text>
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
