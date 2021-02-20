import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Me } from './src/components/Me';
import { Login_screen } from './src/components/Login/Login_sreen'
import { Register_screen } from './src/components/Login/Register_screen'
import { Splash } from './src/components/Login/Splash'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationActions } from "react-navigation";
import { HomePage } from './src/components/HomePage/HomePage';



// setTimeout(() => {
//   navigate('Splash'); //this.props.navigation.navigate('Login')
// }, 5000);  //5000 milliseconds


export default class App extends Component {

  constructor(props) {
    super(props)

  }
  componentDidMount() {
    setTimeout(() => {
      NavigationActions.navigate('Splash');
    }, 1000);
  }

  render() {
    const Stack = createStackNavigator();


    return (
      <NavigationContainer screenOptions={screenOptions}>
        <Stack.Navigator screenOptions={screenOptions}>
          {/* <Stack.Screen name="Splash" component={Splash} /> */}

          <Stack.Screen name="Login" component={Login_screen} />
          <Stack.Screen name="Register" component={Register_screen} />
          <Stack.Screen name="HomePage" component={HomePage} />

        </Stack.Navigator>
      </NavigationContainer >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
const screenOptions = {
  headerShown: false,
}