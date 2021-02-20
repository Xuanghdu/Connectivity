import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>UofTHacks VIII Starts Now! Hello World!</Text>
      <Greeting name="Xuanghdu" />
      <StatusBar style="auto" />
    </View>
  );
}

const Greeting = (props) => {
  return (
    <view style={styles.center}>
      <Text>Welcome to Connectivity, {props.name}!</Text>
    </view>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
