import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export class Login extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: 'orange' }}>
                    <Image source={require('./pic.png')} />

                </View>
                <TextInput
                    placeholder='Username'
                    style={styles.input} />
                <TextInput
                    placeholder='Password'
                    style={styles.input} />
                <Button title='Login' style={styles.button} />
            </View >
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: '5%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 10,

    },
    button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    }
});
