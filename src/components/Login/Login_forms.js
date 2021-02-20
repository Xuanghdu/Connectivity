import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { cos } from 'react-native-reanimated';


export class Login_forms extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }

    }
    onChangeText = (key, value) => {
        this.setState({ [key]: value })
    }

    submit = () => {
        if (this.state.username === '' || this.state.password === '') {
            alert('invalid username or password')
        } else {
            const account = {
                username: this.state.username,
                password: this.state.password,
            }
            this.setState({
                username: '',
                password: ''
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    placeholder='Username'
                    returnKeyType='next'
                    style={styles.input}
                    onChangeText={(username) => this.onChangeText('username', username)}
                    onSubmitEditing={() => this.logininfo.focus()}
                />
                <TextInput
                    placeholder='Password'
                    returnKeyType='go'
                    secureTextEntry
                    style={styles.input}
                    ref={(password) => this.logininfo = (password)}
                    onChangeText={(password) => this.onChangeText('password', password)}
                />
                <Button
                    title='Login'
                    style={styles.button}
                    onPress={() => console.log(this.logininfo)}
                />
                <View style={styles.text}>
                    {this.state.username}
                    {this.state.password}
                </View>
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
    },
    text: {
        margin: "10px",
        padding: "10px",
        fontFamily: 'Garamond',
        color: 'beige',
    }
});
