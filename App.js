import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component {
  render(){
  return (
    <AppContainer/>
  );
}}
class HomeScreen extends Component{
  render() {
    return(

      <View>
      <Text>Sign Up</Text>

        <TextInput
          placeholder = 'Username'
        />
        <TextInput
          placeholder = 'Email'
        />
        <TextInput
          placeholder = 'Password'
        />
        <TextInput
          placeholder = 'Confirm password'
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />

      </View>
    )
  }
}

class LoginScreen extends Component{
  render() {
    return(
      <View>
        <Text>Hello from LoginScreen</Text>

        <TextInput
          placeholder = 'Email'
        />
        <TextInput
          placeholder = 'Password'
        />
        <Button
          title="Log in"
          onPress={() => this.props.navigation.navigate("UserMain")}
        />
      </View>
    )
  }
}

class UserMainScreen extends Component {
  render() {
    return(
      <View>
        <Text>Let's get Fizzy-cal</Text>

        <Button
          title="View your progress"
          onPress={() => this.props.navigation.navigate("DailyStats")}
        />
      </View>
    )
  }
}

class DailyStatsScreen extends Component {
  render() {
    return(
      <View>
        <Text>Your daily stats</Text>

        <Button
          title="Back to homepage"
          onPress={() => this.props.navigation.navigate("UserMain")}
        />
      </View>

    )
  }
}

const Navigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen},
  UserMain: {screen: UserMainScreen},
  DailyStats: {screen: DailyStatsScreen}
},
{initialRouteName: 'Home'});

const AppContainer = createAppContainer(Navigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
