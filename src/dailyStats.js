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

const data = [
  { date: '01/08/19', reps: 3, label: 3 },
  { date: '02/08/19', reps: 5, label: 5 },
  { date: '03/08/19', reps: 1, label: 1 },
  { date: '04/08/19', reps: 2, label: 2 },
  { date: '05/08/19', reps: 9, label: 9 },
  { date: '06/08/19', reps: 1, label: 1 },
  { date: '07/08/19', reps: 4, label: 4 }
];

export default class DailyStatsScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    this.state = {}
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

  componentDidMount() {
    this._retrieveExerciseName()
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
           data={data}
           style={{ data: { fill: "#FFFFFF" }, labels: { fill: '#FF00FF'} }}
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
  }
})
