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
            <Text style={styles.text}>USERNAME: {props.username}</Text>
            <Text style={styles.text}>Name: {props.name}</Text>
            <Text style={styles.text}>Date of Birth: {props.dob}</Text>
            <Text style={styles.text}>Gender: {props.gender}</Text>
            <Text style={styles.text}>Country/Region: {props.nat}</Text>
            <Text style={styles.text}>Contact: {props.contact}</Text>
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
    avatar: {
        width: 50,
        height: 50,
    },
    text: {
        fontFamily: 'Garamond',
        // fontWeight: 'bold',
        color: 'white',
    }
});