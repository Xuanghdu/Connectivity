import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Welcome = () => {
    return  (
    <View style={styles.center}>
        <Text>UofTHacks VIII Starts Now! Hello World!</Text>
        <Greeting name="Xuanghdu" />
    </View>
    );
}

const Greeting = (props) => {
    return (
      <View style={styles.center}>
        <Text>Welcome to Connectivity, {props.name}!</Text>
      </View>
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