import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { AsyncStorage } from 'react-native'

export default class RecordSessionScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      exercise: '',
      reps: [],
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/pictures/G3.jpg')}
        style={styles.container}
      >
        <Text>Record your session</Text>
        <Picker
          style={{ height: 200, width: 400 }}
          itemStyle={{ height: 200 }}
          selectedValue={(this.state && this.state.exercise) || 'lowRow'}
          onValueChange={exerciseValue =>
            this.setState({ exercise: exerciseValue })
          }
        >
          <Picker.Item label="Low row" value="lowRow" />
          <Picker.Item label="Sit ups" value="sitUps" />
          <Picker.Item label="Quadriceps Stretch" value="quadricepsStretch" />
          <Picker.Item label="Hamstring Stretch" value="hamstringStretch" />
          <Picker.Item label="Kick backs" value="kickBacks" />
          <Picker.Item label="Bridging" value="bridging" />
          <Picker.Item label="Clam Shell" value="clamShell" />
          <Picker.Item label="Lunges" value="lunges" />
        </Picker>

        <Text>Enter reps</Text>

        <TextInput
          style={styles.textBoxes}
          placeholder="0"
          keyboardType='numeric'
          onChangeText={text => this.setState({ reps: text })}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('UserMain')}
        >
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
