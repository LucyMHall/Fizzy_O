import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Picker, ImageBackground } from 'react-native';

export default class RecordSessionScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      exercise: ""
    }
  }
  render(){
    return(
      <ImageBackground source={require('./assets/pictures/G3.jpg')} style={styles.container}>
        <Text>Record your session</Text>
        <Picker
        style={{height: 50, width: 400}}
          selectedValue={this.state.exercise}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({exercise: itemValue})
          }>
          <Picker.Item label="Low row" value="exercise"/>
          <Picker.Item label="Sit ups" value="exercise"/>
          <Picker.Item label="Quadriceps Stretch" value="exercise"/>
          <Picker.Item label="Hamstring Stretch" value="exercise"/>
          <Picker.Item label="Kick backs" value="exercise"/>
          <Picker.Item label="Bridging" value="exercise"/>
          <Picker.Item label="Clam Shell" value="exercise"/>
          <Picker.Item label="Lunges" value="exercise"/>
        </Picker>

        <Text>Enter reps</Text>

        <TextInput
         placeholder="0"
         />
    </ImageBackground>
  )};
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
