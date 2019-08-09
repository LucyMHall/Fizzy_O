import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RecordSessionScreen extends Component {
  render() {
    return(
    <View style={styles.container}>
      <Text>Record your session</Text>
      <Text>Log:</Text>

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
