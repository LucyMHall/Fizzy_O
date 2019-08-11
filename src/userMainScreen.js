import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class UserMainScreen extends Component {
  render() {
    return(
    <View style={styles.container}>
      <Text>Hi, (username)</Text>
      <Button
       title="View your progress"
       onPress={() => this.props.navigation.navigate("DailyStats")}
     />
     <Button
       title="Record a session"
       onPress={() => this.props.navigation.navigate("RecordSession")}
     />
    </View>
  );
}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
