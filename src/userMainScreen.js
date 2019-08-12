import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import {AsyncStorage} from 'react-native';

export default class UserMainScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props){
    super(props);
    this.state = {}
  }

  _retrieveUsernameData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        // We have data!!
        this.setState({ username: value })
        console.log(value)
      } else {
        console.log("That value does not exist");
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  componentDidMount(){
    this._retrieveUsernameData();
  }

  render() {
    return(
      <View>
        <ImageBackground source={require('./assets/pictures/G3.jpg')} style={styles.container}>
        <Text>Let's get Fizzy-cal</Text>
        {this.state.username &&
          <Text>Hello {this.state.username}</Text>
        }
        <Button
         title="View your progress"
         onPress={() => this.props.navigation.navigate("DailyStats")}
       />
       <Button
         title="Record a session"
         onPress={() => this.props.navigation.navigate("RecordSession")}
       />
       </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
