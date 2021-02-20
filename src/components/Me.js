import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Me = (props) => {
    return (
        <View style={styles.row}>
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>USERNAME: {props.username}</Text>
            <Text style={styles.text}>Name: {props.name}</Text>
            <Text style={styles.text}>Date of Birth: {props.dob}</Text>
            <Text style={styles.text}>Gender: {props.gender}</Text>
            <Text style={styles.text}>Country/Region: {props.nat}</Text>
            <Text style={styles.text}>Contact: {props.contact}</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    container: {
        margin: '10px',
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'left',
        justifyContent: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
    },
    text: {
        fontFamily: 'Garamond',
        // fontWeight: 'bold',
        color: 'white',
    }
});