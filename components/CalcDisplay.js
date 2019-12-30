import React, {useState} from 'react';
import { StyleSheet, View, Text } from "react-native";

const CalcDisplay = ({display}) => {
  return (
    <View>
      <Text>{display}</Text>
    </View>
  );
};

export default CalcDisplay;