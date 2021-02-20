import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';



export class Login_forms extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    placeholder='Username'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    secureTextEntry
                    style={styles.input}
                />
                <Button
                    title='Login'
                    style={styles.button}
                />
            </View >

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
    img: {
        width: 100,
        heigh: 100,
    },
    input: {
        height: '10%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 10,
        padding: "5%",

    },
    button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    }
});
