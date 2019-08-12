import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';


export default class UserMainScreen extends Component {
  static navigationOptions = { header: null }

  render() {
    return(
      <ImageBackground source={require('./assets/pictures/G3.jpg')} style={styles.container}>
      <Text>Hi, (username)</Text>

     <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.navigation.navigate("DailyStats")}
        >
        <Text> View your progress </Text>
     </TouchableOpacity>

     <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.navigation.navigate("RecordSession")}
        >
        <Text> Record a session </Text>
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

  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.8,
    borderWidth: 1,
    borderColor: 'white',
    width:150,
    borderRadius: 25,
    padding: 10,
    marginTop: 10
 }

});
