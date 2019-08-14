import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class LoginScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      loginEmail: '',
      loginPassword: '',
      storedEmail: ''
    }
  }

  _fetchStoredEmailAndPassword = async () => {
    try {
      const value = await AsyncStorage.getItem('email')
      if (value !== null) {
        value => this.setState({storedEmail: value})
      } else {
        console.log('Nothing stored')
      }
    } catch (error) {}
  }

  _hasMatchingEmailAndPassword = () => {
    return true
  }

  componentDidMount() {
    this._fetchStoredEmailAndPassword()
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/pictures/G3.jpg')}
        style={styles.container}
      >
        <DismissKeyboard>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
        <Text style={styles.titleText}>Log In</Text>
        <TextInput
          style={styles.textBoxes}
          placeholder="Email"
          onChangeText={text => this.setState({ loginEmail: text })}
        />
        <TextInput
          style={styles.textBoxes}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => this.setState({ loginPassword: text })}
          />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (this._hasMatchingEmailAndPassword()) {
              this.props.navigation.navigate('UserMain')
            } else {
              console.log("Incorrect Match")
            }
          }}
        >
        <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </DismissKeyboard>
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

  textBoxes: {
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 20,
    margin: 5,
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: 300,
    height: 40,
    fontSize: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: 150,
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
  },

  buttonText: {
    fontFamily: 'HelveticaNeue-Bold',
    color: '#333333',
  },

  titleText: {
    fontSize: 25,
    fontFamily: 'HelveticaNeue-Light',
    margin: 20,
    color: 'white',
    textAlign: 'center',
  }
})
