import React, { Component } from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { AsyncStorage } from 'react-native'
import moment from "moment";

export default class DailyStatsScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  _retrieveExerciseName = async () => {
    try {
      const value = await AsyncStorage.getItem("exercise")
      if (value !== null) {
        // We have data!!
        this.setState({ exercise: value })
        console.log(this.state.exercise)
      } else {
        console.log('The exercise does not exist')
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  _retrieveExerciseData = async () => {
    try {
      var current_day = moment(new Date()).format("L")
      // var yesterday = current_day.subtract(1, "days").format("L")
      const value = await AsyncStorage.getItem(current_day)
      this.setState({reps: value})
      this.setState({date: current_day })
      this.setState({data: [{date: this.state.date, label: this.state.reps, reps: this.state.reps}]})
    } catch (error) {
      // Error retrieving data
    }
  }

  componentDidMount() {
    this._retrieveExerciseName()
    this._retrieveExerciseData()
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/pictures/G3.jpg')}
        style={styles.container}
      >
        <Text style={styles.titleText}>Your progress on {this.state.exercise}</Text>

       <VictoryChart
         domainPadding={20}
         >
         <VictoryBar
          barWidth = {40}
           data={this.state.data}
           style={{ data: { fill: "#FFFFFF" }, labels: { fill: '#000000'} }}
           labels={(d) => d.y}
           labelComponent={<VictoryLabel dy={30}/>}
           x="date" y="reps"/>
         <VictoryAxis
         />
       </VictoryChart>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('UserMain')}
        >
          <Text style={styles.buttonText}>Back to homepage</Text>
        </TouchableOpacity>
      </ImageBackground>
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

  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: 200,
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
  },

  buttonText: {
    fontFamily: 'HelveticaNeue-Bold',
    color: '#333333',
    padding: 5,
  },

  titleText: {
    fontSize: 25,
    fontFamily: 'HelveticaNeue-Light',
    margin: 20,
    color: 'white',
    textAlign: 'center',
  }
})
