import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Me = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Text>USERNAME: {props.username}</Text>
            <Text>Name: {props.name}</Text>
            <Text>Date of Birth: {props.dob}</Text>
            <Text>Gender: {props.gender}</Text>
            <Text>Country/Region: {props.nat}</Text>
            <Text>Contact: {props.contact}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
      width: 50,
      height: 50,
    },
});