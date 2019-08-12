import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

export default class DailyStatsScreen extends Component {
  static navigationOptions = { header: null }

  render() {
    return(
      <ImageBackground source={require('./assets/pictures/G3.jpg')} style={styles.container}>
      <Text>Daily Stats</Text>
      <Button
          title="Back to homepage"
          onPress={() => this.props.navigation.navigate("UserMain")}
        />
    </ImageBackground>
  );
}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
