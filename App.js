import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Me } from './src/components/Me';
import { Login_screen } from './src/components/Login/Login_sreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcome /> */}
      <Login_screen />
      {/* <Me /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
