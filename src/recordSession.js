import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import { AsyncStorage } from 'react-native'
import moment from "moment";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class RecordSessionScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      exercise: "",
      reps: "",
      date: moment(new Date()).format('YYYY-MM-DD')
    }
  }

  _checkAndStoreData = async () => {
    try {
      var current_day = moment(new Date()).format("YYYY-MM-DD")
      const value = await AsyncStorage.getItem(current_day)
      if (value !== null && !isNaN(value) ) {
        const updated_value = Number(value) + Number(this.state.reps)
        await AsyncStorage.setItem(this.state.date, `${updated_value}`)
      } else {
        await AsyncStorage.setItem(this.state.date, this.state.reps)
        await AsyncStorage.setItem('exercise', this.state.exercise)
      }
    } catch (error) {}
  }


  render() {

    const today = this.state.date;
    const date = moment(today).format('YYYY-MM-DD');

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
        <Image
          style={{
            width: 50, height: 50, top: 40, left: 20,
            alignSelf: 'flex-end', marginTop: 10, marginLeft: 16,
            position: 'absolute'
          }}
          source={require('./assets/pictures/heart_white.png')}
        />

        <Text style={styles.titleText}>Record your session</Text>

        <Picker
          style={{ height: 200, width: 400,}}
          itemStyle={{ height: 200,
                      color: 'white',
                      fontFamily: 'HelveticaNeue-Medium' }}
          selectedValue={this.state.exercise}
          onValueChange={( itemValue ) =>
            this.setState({
              PickerValue: itemValue,
              exercise: itemValue
              })
          }
        >
          <Picker.Item label="↓ Select an exercise ↓" value="" />
          <Picker.Item label="Low row" value = "Low Row" />
          <Picker.Item label="Sit ups" value="Sit Ups" />
          <Picker.Item label="Quadriceps Stretch" value="Quadriceps Stretch" />
          <Picker.Item label="Hamstring Stretch" value="Hamstring Stretch" />
          <Picker.Item label="Kick backs" value="KickBacks" />
          <Picker.Item label="Bridging" value="Bridging" />
          <Picker.Item label="Clam Shell" value="Clam Shell" />
          <Picker.Item label="Lunges" value="Lunges" />
        </Picker>

        <Text style={styles.textStyling}>Enter reps</Text>

        <TextInput
          style={styles.textBoxes}
          placeholder="0"
          keyboardType='numeric'
          maxLength={3}
          onChangeText={text => this.setState({ reps: text })}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (this.state.exercise == "") {
              console.log("Select an exercise")
            } else {
              this.props.navigation.navigate('UserMain')
              this._checkAndStoreData()
            }
          }}>
        <Text style={styles.buttonText}>Submit </Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </DismissKeyboard>
      </ImageBackground>
    )
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBoxes: {
    margin: 5,
    width: 150,
    height: 40,
    fontSize: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'rgba(255,255,255,0.4)',
    paddingLeft: 70,
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
    fontSize: 14,
  },

  titleText: {
    fontSize: 25,
    fontFamily: 'HelveticaNeue-Light',
    margin: 20,
    color: 'white',
    textAlign: 'center',
  },

  textStyling: {
    padding: 20,
    fontFamily: 'HelveticaNeue-Light',
    color: 'white',
    fontSize: 16,
  },
})
