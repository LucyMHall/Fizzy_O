import React from 'react';
import { StyleSheet, Text, View, ImageBackground,  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/signUp';
import LoginScreen from './src/logIn';
import DailyStatsScreen from './src/dailyStats';
import RecordSessionScreen from './src/recordSession';
import UserMainScreen from './src/userMainScreen';


export default function App() {
  return (
   
    <AppContainer/>

  );
}
const Navigator = createStackNavigator({

  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen},
  UserMain: {screen: UserMainScreen},
  DailyStats: {screen: DailyStatsScreen},
  RecordSession: {screen: RecordSessionScreen}

},
{initialRouteName: 'Home'});
const AppContainer = createAppContainer(Navigator);




const styles = StyleSheet.create({
  container: {
    flex: 1,
        // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
