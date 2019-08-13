import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { AsyncStorage } from 'react-native'
import moment from "moment";


export default class RecordSessionScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      exercise: "",
      reps: "",
      date: moment(new Date()).format("YYYY-MM-DD")
    }
  }

  _storeExercise = async (
    exercise_key,
    exercise_name
  ) => {
    try {
      await AsyncStorage.setItem(exercise_key, exercise_name)
    } catch (error) {
      //Error saving data
    }
  }

  _storeNewDate = async (
    date_key,
    reps_value
  ) => {
    try {
      await AsyncStorage.setItem(date_key, reps_value)
    } catch (error) {
      //Error saving data
    }
  }

  _updateStoredDate = () => { 
    console.log("this is the sad path")
  }

  _hasDate = async () => {
    try {
      const value = await AsyncStorage.getItem(`${this.state.date}`)
      if (value !== null) {
        return "new"
      } else {
        return "update"
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  _checkAndStoreData = () => {
    this._storeExercise(
      "exercise",
      this.state.exercise,
    )
    if ( this._hasDate() == "new") {
    this._storeNewDate(
      this.state.date,
      this.state.reps
    )
    } else {
    this._updateStoredDate()
    }
  }


  // _retrieveExerciseName = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("exercise")
  //     if (value !== null) {
  //       // We have data!!
  //       this.setState({ exercise: value })
  //       console.log(this.state.exercise)
  //     } else {
  //       console.log('The exercise does not exist')
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // }

  // _storeData = async (
  //   exercise_key,
  //   exercise_name,
  //   date_key,
  //   reps_value
  // ) => {
  //   try {
  //     await AsyncStorage.setItem(exercise_key, exercise_name)
  //   } catch (error) {
  //     // Error saving data
  //   }
  //   try {
  //     await AsyncStorage.setItem(date_key, reps_value)
  //   } catch (error) {
  //     // Error saving data
  //   }
  // }

  render() {

    const today = this.state.date;
    const date = moment(today).format("DD, MMMM, YYYY");

    return (
      <ImageBackground
        source={require('./assets/pictures/G3.jpg')}
        style={styles.container}
      >

        <Text>{date}</Text>

        <Text>Record your session</Text>
        <Picker
          style={{ height: 200, width: 400 }}
          itemStyle={{ height: 200 }}
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
          <Picker.Item label="Sit ups" value = "Sit Ups" />
          <Picker.Item label="Quadriceps Stretch" value = "Quadriceps Stretch" />
          <Picker.Item label="Hamstring Stretch" value = "Hamstring Stretch" />
          <Picker.Item label="Kick backs" value = "KickBacks" />
          <Picker.Item label="Bridging" value = "Bridging" />
          <Picker.Item label="Clam Shell" value = "Clam Shell" />
          <Picker.Item label="Lunges" value = "Lunges" />
        </Picker>

        <Text>Enter reps</Text>

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
              this._checkAndStoreData(
                // "exercise",
                // this.state.exercise,
                // this.state.date,
                // this.state.reps
              )
            }
          }}>
          <Text> Submit </Text>
        </TouchableOpacity>
      </ImageBackground>
    )
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBoxes: {
    margin: 5,
    backgroundColor: 'white',
    width: 100,
    height: 40,
    fontSize: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'rgba(255,255,255,0.4)',
    paddingLeft: 40
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
