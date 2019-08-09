import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/signUp';
import LoginScreen from './src/logIn';
import DailyStatsScreen from './src/dailyStats';
import RecordSessionScreen from './src/recordSession';

export default function App() {
  return (
    <AppContainer/>

  );
}
const Navigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  LoginScreen: {screen: LoginScreen},
  // UserMain: {screen: UserMainScreen},
  DailyStats: {screen: DailyStatsScreen},
  RecordSession: {screen: RecordSessionScreen}
},
{initialRouteName: 'HomeScreen'});
const AppContainer = createAppContainer(Navigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
