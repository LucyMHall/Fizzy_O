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
// import { material } from 'react-native-typography'

export default class DailyStatsScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }



  _getDateStringFromDaysAgo = (numberOfDays) => {
    return moment().subtract(numberOfDays, "days").format('YYYY-MM-DD');
  }

  _getRepsForDate = async (date) => {
    try {
      value = await AsyncStorage.getItem(date)
      if (value !== null && !isNaN(value)) {
        return Number(value)
      } else {
        return 0
      }
    } catch (error) {}
  }

  _retrieveExerciseData = async () => {
    try {
      var current_day = moment(new Date()).format('YYYY-MM-DD')
      // var yesterday = current_day.subtract(1, "days").format("L")
      const value = await AsyncStorage.getItem(current_day)
      this.setState({data: [
                            {date: this._getDateStringFromDaysAgo(6), reps: await this._getRepsForDate(this._getDateStringFromDaysAgo(6))},
                            {date: this._getDateStringFromDaysAgo(5), reps: await this._getRepsForDate(this._getDateStringFromDaysAgo(5))},
                            {date: this._getDateStringFromDaysAgo(4), reps: await this._getRepsForDate(this._getDateStringFromDaysAgo(4))},
                            {date: this._getDateStringFromDaysAgo(3), reps: await this._getRepsForDate(this._getDateStringFromDaysAgo(3))},
                            {date: this._getDateStringFromDaysAgo(2), reps: await this._getRepsForDate(this._getDateStringFromDaysAgo(2))},
                            {date: this._getDateStringFromDaysAgo(1), reps: await this._getRepsForDate(this._getDateStringFromDaysAgo(1))},
                            {date: this._getDateStringFromDaysAgo(0), reps: await this._getRepsForDate(this._getDateStringFromDaysAgo(0))},
                          ]
                          })
    } catch (error) {
      // Error retrieving data
    }
  }

  componentDidMount() {
    this._retrieveExerciseData()
    var date = this._getDateStringFromDaysAgo(0)
    console.log(this._getRepsForDate(date))
    AsyncStorage.multiSet([
                           [this._getDateStringFromDaysAgo(6), '1'],
                           [this._getDateStringFromDaysAgo(5), '3'],
                           [this._getDateStringFromDaysAgo(4), '6'],
                           [this._getDateStringFromDaysAgo(3), '8'],
                           [this._getDateStringFromDaysAgo(2), '2'],
                           [this._getDateStringFromDaysAgo(1), '1'],
                         ])
 }

  render() {
    return (
      <ImageBackground
        source={require('./assets/pictures/G3.jpg')}
        style={styles.container}
      >
        <Text style={styles.titleText}>Your progress on Low Rows</Text>

        <VictoryChart
          domainPadding={20}
          >
          <VictoryBar
          // animate={{
          //   duration: 1000,
          //   }}
           barWidth = {30}
            data={this.state.data}
            cornerRadius={10}
            style={{ data: { fill: 'rgba(255,255,255, 0.7)'}, labels: { fill: '#CC016B', fontFamily: 'HelveticaNeue', fontWeight: 'bold'} }}
            labels={(d) => d.reps}
            labelComponent={<VictoryLabel dy={30}/>}
            x="date" y="reps"/>
          <VictoryAxis
           style = {{
             tickLabels: {padding: 0, angle:90, dx: 25, dy: 5,  fontSize: 9, fontFamily: 'HelveticaNeue-Medium', fill: 'white' }
           }}
          />
        </VictoryChart>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('UserMain')}
        >
          <Text style={(styles.buttonText)}>Back to homepage</Text>
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
    position: 'absolute',
    bottom: 50,
  },

  buttonText: {
    // fontFamily: 'HelveticaNeue-Bold',
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
