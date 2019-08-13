import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { AsyncStorage } from 'react-native'

export default class UserMainScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    this.state = {}
  }

  _retrieveUsernameData = async () => {
    try {
      const value = await AsyncStorage.getItem('username')
      if (value !== null) {
        // We have data!!
        this.setState({ username: value })
    
      } else {
        console.log('The username does not exist')
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  componentDidMount() {
    this._retrieveUsernameData()
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/pictures/G3.jpg')}
        style={styles.container}
      >
        <Text>Hi, {this.state.username}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('DailyStats')}
        >
          <Text> View your progress </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('RecordSession')}
        >
          <Text> Record a session </Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}
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
    width: 150,
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
  },
})
