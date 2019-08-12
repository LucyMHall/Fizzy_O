import React, {Component} from 'react';
import HomeScreen from '../../src/signUp';
import LoginScreen from '../../src/logIn';
import DailyStatsScreen from '../../src/dailyStats.js';
import UserMainScreen from '../../src/userMainScreen';
import { createStackNavigator} from 'react-navigation';

const Navigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen},
  UserMain: {screen: UserMainScreen},
  DailyStats: {screen: DailyStatsScreen},
  // RecordSession: {screen: RecordSessionScreen}
},
{initialRouteName: 'Home'});

export default Navigator;
