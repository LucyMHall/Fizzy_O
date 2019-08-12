import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';


export default class UserMainScreen extends Component {
  static navigationOptions = { header: null }

  render() {
    return(
      <ImageBackground source={require('./assets/pictures/G3.jpg')} style={styles.container}>
      <Text>Hi, (username)</Text>
      <Button
       title="View your progress"
       onPress={() => this.props.navigation.navigate("DailyStats")}
     />
     <Button
       title="Record a session"
       onPress={() => this.props.navigation.navigate("RecordSession")}
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
