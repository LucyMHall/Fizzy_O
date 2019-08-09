import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory-native';

const data = [
  { date: '01/08/19', reps: 3, label: 3 },
  { date: '02/08/19', reps: 5, label: 5 },
  { date: '03/08/19', reps: 1, label: 1 },
  { date: '04/08/19', reps: 2, label: 2 }
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Fizzy_O!</Text>
        {/* <VictoryChart width={350} theme={VictoryTheme.material}>
            <VictoryBar data={data} x="date" y="reps" label="DATEEEEEEE" />
        </VictoryChart> */}
        <VictoryChart 
          // theme={VictoryTheme.material}
          domainPadding={20}
          >
          <VictoryBar 
            data={data}
            style={{ data: { fill: "#FF00FF" }, labels: { fill: '#FFFFFF'} }}
            labels={(d) => d.y}
            labelComponent={<VictoryLabel dy={30}/>}
            x="date" y="reps"/>
          <VictoryAxis 
            
          />
        </VictoryChart>



      </View>
    );
}}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});