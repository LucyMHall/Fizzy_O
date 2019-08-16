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
// import { material } from 'react-native-typography'


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
        <Text style={styles.titleText}>Hi, {this.state.username}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('DailyStats')}
        >
        <Text style={(styles.buttonText)}>View your progress</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('RecordSession')}
        >
        <Text style={(styles.buttonText)}>Record a session</Text>
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
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: 200,
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  buttonText: {
    // fontFamily: 'HelveticaNeue-Bold',
    fontSize: 14,
    color: '#333333',
    padding: 5,
  },

  titleText: {
    fontSize: 25,
    // fontFamily: 'material',
    margin: 20,
    color: 'white',
    textAlign: 'center',
  }
})
