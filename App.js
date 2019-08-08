import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native';

export default class App extends Component<{}> {

  constructor(props){
      super(props);

      this.state = {
        username: ""
      }
    }

    _viewUsername() {
      console.log(this.state.username)
    }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder = "username"
          onChangeText={(text) => this.setState({username: text})}
        />
      <Button
        onPress = {() => this._viewUsername()}
        title="submit"
      />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
