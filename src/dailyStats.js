import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class DailyStatsScreen extends Component {
  render() {
    return(
    <View style={styles.container}>
      <Text>Daily Stats</Text>
      <Button
          title="Back to homepage"
          onPress={() => this.props.navigation.navigate("UserMain")}
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


