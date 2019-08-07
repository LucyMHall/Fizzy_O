import React, {Component} from 'react';
import { StyleSheet, Text, View, Button  } from 'react-native';
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
      <Text>Hello from HomeScreen</Text>

      </View>
    )
  }
}


const Navigator = createStackNavigator({
  Home: {screen: HomeScreen},
  // Login: {screen: LoginScreen},
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
