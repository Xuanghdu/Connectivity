import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginBottom: 10 }}>Login</Text>
                <TextInput
                    placeholder='Username'
                    style={styles.input} />
                <TextInput
                    placeholder='Password'
                    style={styles.input} />
                <Greeting name="Xuanghdu" />
                <StatusBar style="auto" />
            </View>
        );
    }
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
    input: {
        height: '5%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 10

    }
});
