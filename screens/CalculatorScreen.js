import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CalcDisplay from '../components/CalcDisplay';
import CalcButton from '../components/CalcButton';

const CalculatorScreen = () => {

  return (
    <View style={{paddingTop:50}}>
      <CalcDisplay />
      <View>
        <CalcButton number="0" />
        <CalcButton number="1" />
        <CalcButton number="2" />
        <CalcButton number="3" />
      </View>
      <Text>Calculadora Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
})

export default CalculatorScreen;