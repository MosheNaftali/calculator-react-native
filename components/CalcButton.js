import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const CalcButton = ({number}) => {

  const onPress = number => {
    console.log(number);
  }

  return (
    <View style={style.view}>
      <TouchableOpacity style={style.button} onPress={() => onPress(number)}>
        <Text>{number}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  button: {
    borderWidth: 2,
    flex: 25,
  },
});

export default CalcButton;
